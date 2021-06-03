import * as React from 'react';
import './Modal.css';

const Modal = ({setActive, children}) => {

    return (
        <div className="modal" onClick={() => setActive(false)}>
            <div className="modal__container">
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;