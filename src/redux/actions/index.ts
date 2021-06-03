export const setBooks = (books) => ({
    type: 'BOOKS',
    payload: books
});

export const setLoad = () => ({
    type: 'LOAD'
});

export const setDrop = () => ({
    type: 'DROP'
});

export const setError = (error) => ({
    type: 'ERROR',
    payload: error
});

export const setActiveBook = (data) => ({
    type: 'ACTIVE',
    payload: data
});