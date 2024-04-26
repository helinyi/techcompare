const initialState = {
    currentUser: {
        username: "Guest",
        password: '123456',
        email: "test@example.com",
        isAuthenticated: false
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                currentUser: {
                    ...action.payload,
                    isAuthenticated: true
                }
            };
        case 'CLEAR_USER':
            return {
                ...state,
                currentUser: {
                    ...initialState.currentUser
                }
            };
        default:
            return state;
    }
};

export default userReducer;