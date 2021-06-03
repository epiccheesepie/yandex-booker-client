import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveBook } from '../../redux/actions';

import { Snippet } from '..';
import './View.css';

import { Item } from '../../redux/reducers';

interface ComponentProps {
    loading: boolean,
    error: any,
    items: Array<Item>,
    modalClick: () => void
}

const View = ({loading, error, items, modalClick} : ComponentProps) => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        const target = e.target.closest('.snippet');
        if (!target) return;

        dispatch(setActiveBook(items[target.dataset.index]));
        modalClick();
    };

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
                <div className="container" onClick={handleClick}>
                    {items.map((book, index) => <Snippet key={book.cover_id} book={book} index={index} />)}
                </div>
                )}
            </>
        );
    }
};

export default View;