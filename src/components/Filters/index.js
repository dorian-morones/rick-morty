import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import FilterName from "./FilterItem.js"
import { filterData } from "../../Utilities/filter.js"
import "./Filters.css"

class Filters extends Component {
    constructor(props) {
        super(props)
        this.handlerFilters = this.handlerFilters.bind(this);
        
    }

    handlerFilters(status, gender, id){
        let items = filterData(status, gender, id);
        this.props.getFilteredResults(items)
    }

    render(){
        return(
            <div className="Filters__Wrapper">
                <h2>Filters</h2>
                <FilterName handlerFilters={this.handlerFilters}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.results.data.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
         dispatch(actions.getResults());
        },
        getFilteredResults: (results) => {
            dispatch(actions.getFilteredResults(results));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filters);