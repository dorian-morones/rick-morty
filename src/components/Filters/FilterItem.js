import React, {Component, Fragment} from 'react'

class FilterName extends Component {
    constructor(props) {
        super(props)
        this.handlerSearch = this.handlerSearch.bind(this);
        this.handlerSetState = this.handlerSetState.bind(this);

        this.state = { 
            status: "",
            gender: ""
        }
    }

    handlerSearch(){
        this.props.handlerFilters(this.state.status, this.state.gender)
    }

    handlerSetState(filterType, value){        
        switch (filterType) {
            case "status":
                    this.setState({status: value})
                break;
            case "gender":
                    this.setState({gender: value})
                break;
            default:
        }
    }

    render(){
        return(
            <Fragment>
                <select name="select" onChange={e => this.handlerSetState("status", e.target.value)}>
                    <option value="DEFAULT" >STATUS</option> 
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">unknown</option>
                </select >
                <select name="select" onChange={e => this.handlerSetState("gender", e.target.value)}>
                    <option value="DEFAULT" >GENDER</option> 
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="unknown">unknown</option>
                </select >
                <button onClick={e => this.handlerSearch(e)}>Search</button>
                <button onClick={e => this.props.handlerFilters("", "")}>Reset</button>
            </Fragment>
        )
    }
}

export default FilterName;