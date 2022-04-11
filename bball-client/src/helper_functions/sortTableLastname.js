export default function sortTableLastname(data, sortCategory, leastToGreatest) {
    var temp;
    for(var i = 0; i < data.length; i++){
    
        // Last i elements are already in place  
        for(var j = 0; j < ( data.length - i -1 ); j++){
            
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if(leastToGreatest) {
                if(data[j][sortCategory].dataContent.split(' ')[1] > data[j+1][sortCategory].dataContent.split(' ')[1]){
                
                    // If the condition is true then swap them
                    temp = data[j]
                    data[j] = data[j + 1]
                    data[j+1] = temp
                    }
            } else if(data[j][sortCategory].dataContent.split(' ')[1] < data[j+1][sortCategory].dataContent.split(' ')[1]){
                temp = data[j]
                data[j] = data[j + 1]
                data[j+1] = temp
            }
        }
    }
    return data;
}