import * as React from 'react';
import { Bar } from './components';

const App : React.FC = () => {

    return (
        <main>
            <Bar />
            <div className="snippets"></div>
        </main>
    );
};

export default App;