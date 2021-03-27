const INITIAL_STATE = {
    imageURL: null
};

const imageReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_IMAGE_URL':
            return ({
                ...state,
                imageURL: action.payload
            });
        default:
            return state;
    }
};

export default imageReducer;

