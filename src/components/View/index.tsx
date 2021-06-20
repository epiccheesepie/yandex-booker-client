import * as React from 'react';
import { useDispatch } from 'react-redux';

import { setActiveBook } from '../../redux/actions';
import { Snippet } from '..';
import { TBook } from '../../types';
import './View.css';

interface ComponentProps {
    loading: boolean,
    error: any,
    items: Array<TBook>,
    modalClick: () => void
}

const View : React.FC<ComponentProps> = ({loading, error, items, modalClick}) : React.ReactElement => {

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
                <span className="preloader__content">
                    <span></span>
                </span>
            </div>     
        );
    } else {
        return (
            <>
                {!!items.length && (
                <div className="container" onClick={handleClick}>
                    {items.map((book : TBook, index : number) => <Snippet key={book.cover_id} book={book} index={index} />)}
                </div>
                )}
            </>
        );
    }
};

export default View;