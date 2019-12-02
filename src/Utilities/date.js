export const createdDate = (date) => {

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    let daysAgo;
    if(diffDays < 7){
        daysAgo = diffDays + " days";
    } else if(diffDays > 7 && diffDays < 30){
        daysAgo =  Math.round((diffDays / 7)) 
        daysAgo =  daysAgo <= 1 ? daysAgo + " week ago" : daysAgo + " weeks ago"
    } else if(diffDays > 30 && diffDays < 365){
        daysAgo =  Math.round((diffDays / 7) / 4) 
        daysAgo =  daysAgo <= 1 ? daysAgo + " month ago" : daysAgo + " months ago"
    } else if( diffDays > 365){
        daysAgo =  Math.round(((diffDays / 7) / 4) / 12) 
        daysAgo =  daysAgo <= 1 ? daysAgo + " year ago" : daysAgo + " years ago"
    } else {
        daysAgo =  diffDays + " days"
    }


    return daysAgo
}