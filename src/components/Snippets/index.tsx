import * as React from 'react';

const Snippets = ({loading, ok, items}) => {

    if (!ok) {
        return (
            <span>Ошибка</span>        
        );
    } else {
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
    }

};

export default Snippets;