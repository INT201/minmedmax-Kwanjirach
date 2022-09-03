const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  function minMedMax(num1,num2,num3){
    const seekValue = [num1,num2,num3]
    let maxValue = seekValue[0]
    let minValue = seekValue[0]
    let medValue = seekValue[0]

    // find Max Value
    for(const value of seekValue){
        if(value > maxValue){
            maxValue = value;
        }
    }
    // console.log(maxValue)

    // find Min value
    for(const value of seekValue){
        if(value < minValue){
            minValue = value;
        }
    }
    // console.log(minValue)

    for(const value of seekValue){
        if(value != minValue && value != maxValue){
            medValue = value
        }
        if(num1 === num2){
            medValue = num1
        }

        if(num1 === num3){
            medValue = num1
        }

        if(num2 === num3){
            medValue = num2
        }
    }
    return {min: minValue, mid: middle, max: maxValue}
    // console.log(`Min:${minValue},Med:${medValue},Max: ${maxValue}`)
}
}
module.exports = minMedMax
