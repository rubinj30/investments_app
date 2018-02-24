import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleInvestmentPage extends Component {
    state = {
        investment: {},
        investmentInfo: {}
    }

    componentWillMount = async () => {
        await this.getInvestment()
        this.fetchStockFromApi()
    }

    getInvestment = async () => {
        const userId = this.props.match.params.user_id
        const response = await axios.get(`/api/users/${userId}/investments/${this.props.match.params.id}`)
        this.setState({ investment: response.data })
    }

    fetchStockFromApi = async () => {
        const api_key = process.env.REACT_APP_STOCK_INFO
        const URL = `https://api.intrinio.com/companies?identifier=${this.state.investment.ticker}`
        const response = await axios.get(URL,
            {
                headers: {
                    "X-Authorization-Public-Key": "837e5cd0c9df89299523f4abcd6bdeb1"
                }
            })
        this.setState({ investmentInfo: response.data })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.investment.ticker}
                </div>
                <div>
                    <div>CEO: {this.state.investmentInfo.ceo}</div>
                    <div># of Employees: {this.state.investmentInfo.employees}</div>
                    <div>Headquarters Located in: {this.state.investmentInfo.hq_state}</div>

                    <div>Industry: {this.state.investmentInfo.industry_category}</div>
                    <div>Exchange: {this.state.investmentInfo.stock_exchange}</div>
                    <div><a href="http://amazon.com" target="_blank">Visit Website{this.state.investmentInfo.url}</a></div>
                    <p>{this.state.investmentInfo.short_description}</p>
                </div>
            </div>
        )
    }
}

export default SingleInvestmentPage