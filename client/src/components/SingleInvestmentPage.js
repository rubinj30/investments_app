import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleInvestmentPage extends Component {
    state = {
        investment: {}
    }

    componentWillMount = async () => {
        await this.getInvestment()
        // this.fetchStockFromApi()
    }

    getInvestment = async () => {
        const userId = this.props.match.params.user_id
        const response = await axios.get(`/api/users/${userId}/investments/${this.props.match.params.id}`)
        this.setState({investment: response.data})
    }

    render() {
        return (
            <div>
                {this.state.investment.ticker}
            </div>
        )
    }
}

export default SingleInvestmentPage