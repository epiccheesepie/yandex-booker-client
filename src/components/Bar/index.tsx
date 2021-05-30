import * as React from 'react';
import './Bar.css';

const Bar : React.FC = () => {

    return (
        <div className="bar">
            <input className="bar__text" type="text" placeholder="Я хочу найти..." />
            <button className="bar__button">
                
            </button>
        </div>
    );
};

export default Bar;