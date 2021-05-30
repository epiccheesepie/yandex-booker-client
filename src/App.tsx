import * as React from 'react';
import { Bar } from './components';

const App = () => {

    const timer : any = React.useRef();
    const [query, setQuery] = React.useState('');
    const handleChange = (e) => {
        clearTimeout(timer.current);
        const text : string = e.target.value;
        setQuery(text);

        if (text.length > 0) {
            timer.current = setTimeout(() => {
                //делаем запрос в апи
            }, 1000);
        }
    };

    return (
        <main>
            <Bar query={query} onChange={handleChange} />
            <div className="snippets"></div>
        </main>
    );
};

export default App;