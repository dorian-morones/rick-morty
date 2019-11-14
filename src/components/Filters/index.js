import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = { }
    }
    render(){
        return(
            <div className="Filters__Wrapper">
                <div>Filter #1</div>
                <div>Filter #2</div>
                <div>Filter #3</div>
                <div>Filter #4</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // return {
    //     result: state.results.data.results
    // };
};

const mapDispatchToProps = dispatch => {
    return {
        // getResults: () => {
        //  dispatch(actions.getResults());
        // }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filters);