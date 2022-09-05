export const calculateCal = (state, challenge, goal) => {
    return state(Math.floor((challenge * 100) / (goal)))
}