import * as React from 'react';
import './Snippet.css';

const Snippet = ({book: { title, author, cover_id, first_publish, isbn, publishers}}) => {
    
    return (
        <div className="snippet">
            <img src={`http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`} alt={title} />
            <h1>{title}</h1>
            <h2>{author}</h2>
        </div>
    );
};

export default Snippet;