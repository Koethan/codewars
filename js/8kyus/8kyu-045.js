// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
    let objMap = {}
   for(let i = 0; i < x.length; i++){
     objMap[x[i]] = objMap[x[i]] + 1 || 1
   }
    if (objMap['good'] > 2){
      return 'I smell a series!'
    } if(objMap['good'] >=1){
      return 'Publish!'
    }else {
      return 'Fail!'
    }
  }

//   const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' : 
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
//   }
//filter the array to return all the good values to a new array then get the length of that new array to get the total amount of goods in the original array and save that to a count. Then to get the answer return a ternary, it the good count is less than 1, there are no good ideas return fail, it its less than 3, there are between one or two goods in the array so return publish, else, there are more than 2 goods, so return a series.