import * as React from 'react';

const View = ({loading, ok, items}) => {

    if (ok) {
        if (loading) {
            return (
                <span>Загрузка...</span>         
            );
        } else {
            return (
                <>
                    {items.map(book => <span>{book.title}</span>)}        
                </>
            )
        }
    } else {
        return (
            <span>Ошибка</span>
        );
    }

};

export default View;