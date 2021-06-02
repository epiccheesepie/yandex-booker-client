import * as React from 'react';
import { Snippet } from '..';
import './View.css';

const View = ({loading, error, items}) => {

    if (error) {
        return (
            <span>Ошибка, попробуйте позже</span>
        );
    } else if (loading) {
        return (
            <div className="preloader">
                <span className="preloader__content"></span>
            </div>     
        );
    } else {
        return (
            <>
                {!!items.length && (
                <div className="container">
                    {items.map(book => <Snippet key={book.cover_id} book={book} />)}
                </div>
                )}
            </>
        );
    }
};

export default View;