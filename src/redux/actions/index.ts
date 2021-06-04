export const setBooks = (books) => ({
    type: 'BOOKS',
    payload: books
});

export const setLoad = (bool) => ({
    type: 'LOAD',
    payload: bool
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