export const calculateTime = (state, challenge, goal) => {
    return state(Math.floor((challenge * 100) / (goal)))
}