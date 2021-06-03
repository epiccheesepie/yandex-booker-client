import * as React from 'react';
import './Modal.css';

interface ComponentProps {
    setActive: (state: boolean) => void,
    children: React.ReactNode
}

const Modal = ({setActive, children} : ComponentProps) => {

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