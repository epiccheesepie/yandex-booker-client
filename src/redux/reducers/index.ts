interface RootState {
    books: Array<Item>
    loading: boolean,
    error: any,
    query: string,
    activeBook: Item
}
export interface Item {
    title: string,
    author: string,
    cover_id: number,
    first_publish?: number,
    isbn?: Array<number>,
    publishers?: Array<string>
}

const initState : RootState = {
    books: [],
    loading: false,
    error: null,
    activeBook: {title: ''}
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

        default:
            return state;
    }
};

export default books;