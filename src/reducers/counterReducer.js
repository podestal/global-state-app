const counterReducer = (state, action) => {
    if (action.type === 'INCREMENT') return state + 1
    if (action.type === 'RESET') return 0
    if (action.type === 'DECREMENT') return state - 1
    return state
}

export default counterReducer