import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
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
                <Table>
                    <Column>
                    {this.state.investments.map(investment => (
                        <div>
                            ID {investment.id}
                            <Link key={investment.id} to={`/users/${this.props.match.params.id}/investments/${investment.id}`}>
                                <td>{investment.ticker}</td>
                            </Link>
                            
                        </div>
                    ))}
                    </Column>

                </Table>

                <button onClick={this.toggleShowNewForm}>Add Investment</button>

                {this.state.showNewForm ? <NewInvestment getAllInvestments={this.getAllInvestments} /> : null}
            </div>
        )
    }
}

export default InvestmentList

const Column = styled.div`
    border-right: 1px black solid;
`

const Table = styled.div`
    border: 1px black solid;
    padding: 2px;
`