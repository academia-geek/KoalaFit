export const calculateWater = (state, challenge, water) => {
    return state(Math.floor(((water * 200) * 100) / (challenge)))
}