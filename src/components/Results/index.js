import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import ResultItem from "./ResultItem.js"
import "./Results.css"

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render(){
        let characthers = this.props.filteredResults && this.props.filteredResults !== undefined ? this.props.filteredResults.map( (item, index) => {
            return(
                <ResultItem 
                key={index} 
                id={item.id}
                name={item.name}
                image={item.image}
                status={item.status}
                species={item.species}
                gender={item.gender}
                origin={item.origin}
                location={item.location}
                created={item.created}
                /> 
            )
        }) : <p>Loading</p>

        return(
            <div className="Results__Wrapper">{this.props.loading === true ? <p>Loading</p> : characthers}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.results.data.results,
        filteredResults: state.results.dataFiltered,
        loading: state.results.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
         dispatch(actions.getResults());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Results);