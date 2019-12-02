import React, {Component, Fragment} from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class FilterName extends Component {
    constructor(props) {
        super(props)
        this.handlerSearch = this.handlerSearch.bind(this);
        this.handlerSetState = this.handlerSetState.bind(this);

        this.state = { 
            status: "",
            gender: "",
            value: { min: 0, max: 20 },
        }
    }

    handlerSearch(e){
        console.log(this.state.value.min, this.state.value.max)
        this.props.handlerFilters(this.state.status, this.state.gender, this.state.value)
    }

    handlerSetState(filterType, value){        
        switch (filterType) {
            case "status":
                    this.setState({status: value})
                break;
            case "gender":
                    this.setState({gender: value})
                break;
            case "reset":
                this.setState({
                    status: "",
                    gender: "",
                    value: {min: 0, max:20}
                }, () => {
                    this.handlerSearch(this.state.status, this.state.gender, this.state.value)
                })
                break;
            default:
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-4">
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
                <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)} />
                </div>
                <div className="col-8">
                <button onClick={e => this.handlerSearch(e)}>Search</button>
                <button onClick={e => this.handlerSetState("reset", "")}>Reset</button>
                </div>
            </div>
        )
    }
}

export default FilterName;