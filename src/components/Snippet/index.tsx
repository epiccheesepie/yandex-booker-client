import * as React from 'react';
import './Snippet.css';
import { TBook } from '../../types'; 

interface ComponentProps {
    book: TBook,
    index: number
}

const Snippet : React.FC<ComponentProps> = ({book: { title, author, cover_id}, index}) : React.ReactElement => {
    
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