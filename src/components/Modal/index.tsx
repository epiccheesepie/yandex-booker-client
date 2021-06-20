import * as React from 'react';
import './Modal.css';

interface ComponentProps {
    setActive: (state: boolean) => void,
    children: React.ReactNode
}

const Modal : React.FC<ComponentProps> = ({setActive, children}) : React.ReactElement => {

    React.useEffect(() : any => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    return (
        <div className="modal" onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;