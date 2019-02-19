import * as React from 'react';

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
             style={{
                 background: isOpen ? '#FFFFFF' : '#D65858',
                 border: '1px solid #58D6D6',
                 padding: '5px 10px',
             }}>
                <div onClick={onClick} style={{ cursor: 'pointer '}}>
                {label}
                    <div>
                        {!isOpen && <span>&#9650;</span>}
                        {isOpen && <span>&#9660;</span>}
                    </div>
                </div>
                {isOpen && (
                    <div
                      style={{background: isOpen ? '#58D6D6' : '#D65858',
                    }}>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}
