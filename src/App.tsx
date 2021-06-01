import * as React from 'react';
import { Bar, Snippets } from './components';

const mapDocsToSnippet = (docs) => docs.filter(book => !!book.author_name && !!book.cover_i).map(book => {
    return {
        title: book.title,
        author: book.author_name[0],
        cover_id: book.cover_i,
        first_publish: book.first_publish_year,
        isbn: book.isbn,
        publishers: book.publisher_facet
    };
});

const App = () => {

    const timer : any = React.useRef();
    const [query, setQuery] = React.useState('');
    const handleChange = (e) => setQuery(e.target.value);

    const [books, setBooks] = React.useState([]);
    const [reqOptions, setReqOptions] = React.useState({
        loading: false,
        ok: true
    });
    
    React.useEffect(() => {
        if (query.length > 0) {
            timer.current = setTimeout(() => {
                setReqOptions({
                    loading: true,
                    ok: true
                });
                
                fetch('http://openlibrary.org/search.json?' + new URLSearchParams({
                    title: query
                })).then(res => res.json()).then(json => {
                    setReqOptions({
                        loading: false,
                        ok: true
                    });
                    setBooks(mapDocsToSnippet(json.docs));
                }).catch(_ => {
                    setReqOptions({
                        loading: false,
                        ok: false
                    });
                    setBooks([]);
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timer.current);
        }
    }, [query]);

    console.log(books);

    return (
        <main>
            <Bar query={query} onChange={handleChange} />
            <div className="snippets">
                <Snippets 
                    loading={reqOptions.loading}
                    ok={reqOptions.ok}
                    items={books}
                />
            </div>
        </main>
    );
};

export default App;