import * as React from 'react';

import './Accordion.scss';

export default class AccordionSection extends React.Component<Props, State> {
    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: {isOpen, label},
        } = this;

        return (
            <div
             className="accordion"
             style={{
                 background: isOpen ? '#FFFFFF' : '#FFFFFF',
                 padding: '5px 0px',
             }}>
                <div 
                  onClick={onClick} 
                  style={{ cursor: 'pointer '}}
                  className="accordion__head"
                  >
                {label}
                    <div className="chevron">
                        {!isOpen && <span className="chevron--arrow">&#9650;</span>}
                        {isOpen && <span className="chevron--arrow">&#9660;</span>}
                    </div>
                </div>
                {isOpen && (
                    <div
                      className="accordion__body accordion--is-open"
                      style={{background: isOpen ? '#FFFFFF' : '#D65858',
                    }}>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}
