import * as React from 'react';
import { Bar, View } from './components';

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

    const [query, setQuery] = React.useState('');
    const handleChange = (e) => setQuery(e.target.value);

    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    React.useEffect(() => {
        let timer;
        let controller = new AbortController(); 

        if (query.length > 0) {
            timer = setTimeout(() => {
                setLoading(true);
                
                    fetch('http://openlibrary.org/search.json?' + new URLSearchParams({
                        title: query
                    }), {
                        signal: controller.signal 
                    }).then(res => res.json()).then(json => {
                        setLoading(false);
                        setBooks(mapDocsToSnippet(json.docs));
                    }).catch(e => {
                        if (e.name !== 'AbortError') {
                            setLoading(false);
                            setError(e);
                        }
                    });
                
            }, 1000);
        } else {
            setBooks([]);
        }

        return () => {
            setLoading(false);
            setError(null);
            clearTimeout(timer);
            controller.abort();
        }
    }, [query]);

    const mainStyles = {marginTop: query.length || loading || books.length ? '20px' : 'calc(50vh - var(--bar-height))'};

    return (
        <main style={mainStyles}>
            <Bar query={query} onChange={handleChange} />
            <div className="content">
                <View
                    loading={loading}
                    error={error}
                    items={books}
                />
            </div>
        </main>
    );
};

export default App;