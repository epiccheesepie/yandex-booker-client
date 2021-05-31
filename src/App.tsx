import * as React from 'react';
import { Bar } from './components';

const mapDocsToSnippet = (docs) => docs.filter(book => !!book.author_name && !!book.cover_i).map(book => {
    return {
        title: book.title,
        author: book.author_name[0],
        img: `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    };
});

const App = () => {

    const timer : any = React.useRef();
    const [query, setQuery] = React.useState('');
    const handleChange = (e) => setQuery(e.target.value);

    const [books, setBooks] = React.useState([]);
    
    React.useEffect(() => {
        if (query.length > 0) {
            timer.current = setTimeout(() => {
                fetch('http://openlibrary.org/search.json?' + new URLSearchParams({
                    title: query
                }))
                .then(res => {
                    res.json()
                    .then(res => {
                        const books = mapDocsToSnippet(res.docs);
                        setBooks(books);
                        console.log(books);
                        console.log(res.docs);
                    });
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timer.current);
        }
    }, [query]);

    return (
        <main>
            <Bar query={query} onChange={handleChange} />
            <div className="snippets"></div>
        </main>
    );
};

export default App;