import { TBook } from '../types';

export const mapDocsToSnippet = (docs : any) : Array<TBook> => docs.filter((book : any) => !!book.author_name && !!book.cover_i).map((book : any) => {
    const bookView : TBook = {
        title: book.title,
        author: book.author_name[0],
        cover_id: book.cover_i,
        first_publish: book.first_publish_year,
        isbn: book.isbn,
        publishers: book.publisher
    };
    return bookView;
});