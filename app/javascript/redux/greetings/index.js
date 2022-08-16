import * as API from './api';

const GET_GREETING = 'greetings/random';

export const getRandomGreeting = (payload) => ({
    type: GET_GREETING,
    payload,
});

export const fetchRandomGreeting = () => async (dispatch) => {
    const response = await API.fetchGreetings();
    dispatch(getRandomGreeting(response));
}

const initialState = {
    greeting: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GREETING:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;