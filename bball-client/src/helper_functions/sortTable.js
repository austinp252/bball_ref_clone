export default function sortTable(data, sortCategory, leastToGreatest) {
    var temp;
    for(var i = 0; i < data.length; i++){
    
        // Last i elements are already in place  
        for(var j = 0; j < ( data.length - i -1 ); j++){
            
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if(leastToGreatest) {
                if(data[j][sortCategory].dataContent > data[j+1][sortCategory].dataContent){
                
                    // If the condition is true then swap them
                    temp = data[j]
                    data[j] = data[j + 1]
                    data[j+1] = temp
                    }
            } else if(data[j][sortCategory].dataContent < data[j+1][sortCategory].dataContent){
                temp = data[j]
                data[j] = data[j + 1]
                data[j+1] = temp
            }
        }
    }
    return data;
}

//determine category to sort by
//determine method (LtG or GtL)


