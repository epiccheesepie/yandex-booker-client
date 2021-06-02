import * as React from 'react';
import { Snippet } from '..';
import './View.css';

const View = ({loading, error, items}) => {

    if (error) {
        return (
            <span>Ошибка</span>
        );
    } else if (loading) {
        return (
            <span>Загрузка...</span>         
        );
    } else {
        return (
            <>
            {!!items.length && (
            <div className="content__load">
                {items.map(book => <Snippet key={book.cover_i} book={book} />)}        
            </div>
            )}
            </>
        );
    }
};

export default View;