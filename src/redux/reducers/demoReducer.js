
const initialState = {
    count: 1,
}
const demoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state.count += 1;
            return { ...state };

        case 'DECREMENT':
            state.count -= 1;
            return { ...state };

        default:
            return { ...state };
    }
}
export default demoReducer;