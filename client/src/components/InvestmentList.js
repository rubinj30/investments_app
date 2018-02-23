import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewInvestment from './NewInvestment'

class InvestmentList extends Component {
    state = {
        user: {},
        investments: [],
        newShowForm: false
    }

    componentWillMount() {
        this.getAllInvestments()
    }

    getAllInvestments = async () => {
        const response = await axios.get(`/api/users/${this.props.match.params.id}/investments`)
        this.setState({ investments: response.data })
    }

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    
    render() {
        return (
            <div>
                {this.state.investments.map(investment => (
                    <Link key={investment.id} to={`/users/${this.props.match.params.id}/investments/${investment.id}`}>
                        <div>{investment.id}</div> 
                        <h3>Name: {investment.ticker}</h3>
                    </Link>
                ))}

                <button onClick={this.toggleShowNewForm}>Add Investment</button>

                {this.state.showNewForm ? <NewInvestment getAllInvestments={this.getAllInvestments} /> : null}
            </div>
        )
    }
}

export default InvestmentList