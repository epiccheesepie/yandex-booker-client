import { RootState } from '../../types';

const initState : RootState = {
    books: [],
    loading: true,
    error: null,
    activeBook: {}
};

const books = (state = initState, action) => {
    switch (action.type) {
        case 'BOOKS':
            return {
                ...state,
                books: action.payload
            };

        case 'DROP':
            return {
                ...state,
                loading: false,
                error: null
            };
        
        case 'LOAD':
            return {
                ...state,
                loading: action.payload
            };

        case 'ERROR':
            return {
                ...state,
                error: action.payload
            };

        case 'ACTIVE':
            return {
                ...state,
                activeBook: action.payload
            };

        default:
            return state;
    }
};

export default books;