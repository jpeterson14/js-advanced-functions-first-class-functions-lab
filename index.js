// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    const multiplier = (fare) => {
        return fare * num
    }
   return multiplier
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}
const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)

}