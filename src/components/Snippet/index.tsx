import * as React from 'react';
import './Snippet.css';

const Snippet = ({book: { title, author, cover_id}, index}) => {
    
    return (
        <div className="snippet" data-index={index}>
            <img src={`http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`} alt={title} />
            <div className="snippet__text">
                <h1 className="snippet__title">{title}</h1>
                <h2>{author}</h2>
            </div>
        </div>
    );
};

export default Snippet;