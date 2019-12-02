import store from '../store/index';

export const filterData = (status, gender,idRange) => {
    console.log("id", idRange)

    let defaultItems = store.getState().results.data.results;
    var filteredResults
    var  rangeResults

    if(status !== "" && gender !== ""){
        filteredResults = defaultItems.filter(item => item.status === status && item.gender === gender)
    }else if(status !== "" && gender === ""){
        filteredResults = defaultItems.filter(item => item.status === status)
    }else if(status === "" && gender !== ""){
        filteredResults = defaultItems.filter(item => item.gender === gender)
    }else if(status === "" && gender === ""){
        filteredResults = defaultItems
    }
    rangeResults = filteredResults.filter(item => item.id >= idRange.min && item.id <= idRange.max)
    console.log(filteredResults.filter(item => item.id >= idRange.min && item.id <= idRange.max))
    
    return rangeResults
}

