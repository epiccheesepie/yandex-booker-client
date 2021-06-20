export interface RootState {
    books: Array<TBook>
    loading: boolean,
    error: any,
    activeBook: TBook | {}
}

export type TBook = {
    title: string,
    author: string,
    cover_id: number,
    first_publish?: number,
    isbn?: Array<number>,
    publishers?: Array<string>
}