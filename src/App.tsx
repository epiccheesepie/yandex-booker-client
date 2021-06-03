import * as React from 'react';
import { Bar, View, Modal, Card } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setLoad, setError, setDrop } from './redux/actions';

const mapDocsToSnippet = (docs) => docs.filter(book => !!book.author_name && !!book.cover_i).map(book => {
    return {
        title: book.title,
        author: book.author_name[0],
        cover_id: book.cover_i,
        first_publish: book.first_publish_year,
        isbn: book.isbn,
        publishers: book.publisher
    };
});

const App = () => {

    const dispatch = useDispatch();
    const { books, loading, error } = useSelector(({books, loading, error}) => ({
        books, loading, error
    }));

    const [query, setQuery] = React.useState('');
    const handleChange = (e) => setQuery(e.target.value);

    const [modalActive, setModalActive] = React.useState(false);
    const handleModalClick = () => setModalActive(true);
    
    React.useEffect(() => {
        let timer;
        let controller = new AbortController(); 

        if (query.length > 0) {
            timer = setTimeout(() => {
                dispatch(setLoad());
                
                    fetch('http://openlibrary.org/search.json?' + new URLSearchParams({
                        title: query
                    }), {
                        signal: controller.signal 
                    }).then(res => res.json()).then(json => {
                        dispatch(setBooks(mapDocsToSnippet(json.docs)));
                    }).catch(e => {
                        if (e.name !== 'AbortError') {
                            dispatch(setError(e));
                        }
                    });
                
            }, 1000);
        } else {
            dispatch(setBooks([]));
        }

        return () => {
            dispatch(setDrop());
            clearTimeout(timer);
            controller.abort();
        }
    }, [query]);

    const mainStyles = {marginTop: query.length || loading || books.length ? '20px' : 'calc(50vh - var(--bar-height))'};

    return (
        <>
            <main style={mainStyles}>
                <Bar query={query} onChange={handleChange} />
                <div className="content">
                    <View
                        loading={loading}
                        error={error}
                        items={books}
                        modalClick={handleModalClick}
                    />
                </div>
            </main>
            {modalActive && (
            <Modal setActive={setModalActive}>
                <Card />
            </Modal>
            )}
        </>
    );
};

export default App;