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
                 background: isOpen ? '#fae042' : '#6db65b',
                 border: '1px solid #008f68',
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
                    <div>
                        {this.props.children}
                    </div>
                )}
            </div>
        );
    }
}
