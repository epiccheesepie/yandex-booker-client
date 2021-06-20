import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Bar, View, Modal, Card } from './components';
import { setBooks, setLoad, setError, setDrop } from './redux/actions';
import { mapDocsToSnippet } from './utils/mapDocsToSnippet';

const App = React.memo(() => {

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
        const controller = new AbortController();

        if (query.length > 0) {
            timer = setTimeout(() => {
                dispatch(setError(null));
                dispatch(setLoad(true));
                fetch('http://openlibrary.org/search.json?' + new URLSearchParams({
                    title: query
                }), {
                    signal: controller.signal 
                }).then(res => res.json()).then(({ docs }) => {
                    dispatch(setLoad(false));
                    dispatch(setBooks(mapDocsToSnippet(docs)));
                }).catch(e => {
                    if (e.name !== 'AbortError') {
                        dispatch(setLoad(false));
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

    const sectionStyles = {marginTop: query.length || loading || books.length ? '30px' : 'calc(50vh - var(--bar-height) - var(--header-height))'};

    return (
        <>
            <main>
                <div className="header">
                    <h5>booker.</h5>
                </div>
                <section style={sectionStyles}>
                    <Bar 
                        query={query}
                        onChange={handleChange}
                    />
                    <div className="content">
                        <View
                            loading={loading}
                            error={error}
                            items={books}
                            modalClick={handleModalClick}
                        />
                    </div>
                </section>
            </main>
            {modalActive && (
            <Modal setActive={setModalActive}>
                <Card />
            </Modal>
            )}
        </>
    );
}); 

export default App;