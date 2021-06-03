import * as React from 'react';
import { useSelector } from 'react-redux';
import './Card.css';

const Card = () => {

    const {title, author, cover_id, first_publish, isbn, publishers} = useSelector(({activeBook}) => {
        return {
            title: activeBook.title,
            author: activeBook.author,
            cover_id: activeBook.cover_id,
            first_publish: activeBook.first_publish,
            isbn: activeBook.isbn,
            publishers: activeBook.publishers
        };
    });

    return (
        <div className="card">
            <div className="card__top">
                <h4>{title}</h4>
            </div>
            <div className="card__bot">
                <div className="card__img">
                    <img src={`http://covers.openlibrary.org/b/id/${cover_id}-M.jpg`} alt={title} />
                </div>
                <div className="card__text">
                    <h3><span className="card__static">Название: </span><span className="card__changed">{title}</span></h3>
                    <h3><span className="card__static">Автор: </span><span className="card__changed">{author}</span></h3>
                    <h3><span className="card__static">Дата первой публикации: </span><span className="card__changed">{first_publish}</span></h3>
                    <h3><span className="card__static">Isbn: </span><span className="card__changed">{isbn && isbn.join(', ')}</span></h3>
                    <h3><span className="card__static">Издатели: </span><span className="card__changed">{publishers && publishers.join(', ')}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Card;