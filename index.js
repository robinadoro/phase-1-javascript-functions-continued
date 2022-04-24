// code your solution here
function saturdayFun (skater='roller-skate'){
    
    // const dog = "bathe my dog"
    
    return (`This Saturday, I want to ${skater}!`);
    // return `This Saturday, I want to ${dog}!`

    
}
// saturdayFun()

let mondayWork= function(office = 'go to the office'){
// let work = "work from home"


    return `This Monday, I will ${office}.`
    // return `This Monday, I will ${work}.`
    
}

// function wrapAdjective(){
//     // let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     return `You are ${emphatic}.`
// }
let wrapAdjective = function (wrap='*'){
    return function(emphatic='special'){
        return `You are ${wrap}${emphatic}${wrap}!`
    }
}

 