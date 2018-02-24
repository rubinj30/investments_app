import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleInvestmentPage extends Component {
    state = {
        investment: {},
        investmentInfo: {},
        dailyStockPrices: {}
    }

    componentWillMount = async () => {
        await this.getInvestment()
        await this.fetchStockInfoFromApi()
        // await this.fetchDailyStockPrices()
    }

    getInvestment = async () => {
        const userId = this.props.match.params.user_id
        const response = await axios.get(`/api/users/${userId}/investments/${this.props.match.params.id}`)
        this.setState({ investment: response.data })
    }

    fetchStockInfoFromApi = async () => {
        if (this.state.investment.category === 'stock') {

            const URL = `https://api.intrinio.com/companies?identifier=${this.state.investment.ticker}`
            const response = await axios.get(URL,
                {
                    headers: {
                        "X-Authorization-Public-Key": ""
                    }
                })
            this.setState({ investmentInfo: response.data })
        }
    }

    fetchDailyStockPrices = async () => {
        const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${this.state.investment.ticker}&apikey=`
        const response = await axios.get(URL)
        this.setState({ dailyStockPrices: response.data["Weekly Adjusted Time Series"] })
    }



    render() {

        return (
            <div>
                <div>
                    {this.state.investment.ticker}
                </div>
                <div>
                    {this.state.investment.category === 'stock' ?
                        <div>
                            <div>CEO: {this.state.investmentInfo.ceo}</div>
                            <div># of Employees: {this.state.investmentInfo.employees}</div>
                            <div>Headquarters Located in: {this.state.investmentInfo.hq_state}</div>

                            <div>Industry: {this.state.investmentInfo.industry_category}</div>
                            <div>Exchange: {this.state.investmentInfo.stock_exchange}</div>
                            <div><a href="http://amazon.com" target="_blank">Visit Website{this.state.investmentInfo.url}</a></div>
                            <p>{this.state.investmentInfo.short_description}</p>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}

export default SingleInvestmentPage