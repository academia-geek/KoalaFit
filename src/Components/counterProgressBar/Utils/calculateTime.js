export const calculateTime = (state, challenge, time) => {
    return state(Math.floor((challenge * 100) / (time)))
}