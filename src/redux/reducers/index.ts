const initState = {
    books: [],
    activeBook: null,
    loading: false,
    error: null,
    query: ''
};

const books = (state = initState, action) => {
    switch (action.type) {
        case 'BOOKS':
            return {
                ...state,
                loading: false,
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
                loading: true
            };

        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case 'ACTIVE':
            return {
                ...state,
                activeBook: action.payload
            };
        
        case 'QUERY':
            return {
                ...state,
                query: action.payload
            };

        default:
            return state;
    }
};

export default books;