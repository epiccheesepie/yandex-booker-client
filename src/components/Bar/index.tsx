import * as React from 'react';
import './Bar.css';

interface ComponentProps {
    query: string,
    onChange: (e: React.ChangeEvent) => void;
}

const Bar = ({query, onChange} : ComponentProps) => {

    return (
        <div className="bar">
            <input className="bar__text" type="text" placeholder="Я хочу найти..." value={query} onChange={onChange} />
            <button className="bar__button">
                
            </button>
        </div>
    );
};

export default Bar;