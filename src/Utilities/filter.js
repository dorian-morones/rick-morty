import store from '../store/index';

export const filterData = (status, gender) => {
    let defaultItems = store.getState().results.data.results;
    var filteredResults

    if(status !== "" && gender !== ""){
        filteredResults = defaultItems.filter(item => item.status === status && item.gender === gender)
    }else if(status !== "" && gender === ""){
        filteredResults = defaultItems.filter(item => item.status === status)
    }else if(status === "" && gender !== ""){
        filteredResults = defaultItems.filter(item => item.gender === gender)
    }else if(status === "" && gender === ""){
        filteredResults = defaultItems
        console.log("filteredResults", filteredResults)
    }
    
    return filteredResults
}