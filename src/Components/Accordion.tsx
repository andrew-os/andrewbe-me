import * as React from 'react';

import AccordionSection from './AccordionSection';

export default class Accordion extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        const openSections = {};

        this.state = { openSections };
    }

    onClick = label => {
        const {
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
            openSections: {
                [label]: !isOpen
            }
        });
    };

    render() {
        const{
            onClick,
            props: { children },
            state: { openSections},
        } = this;

        return (
            <div style={{ border: '2px solid #008f68'}}>
             {children.map(child => (
                 <AccordionSection
                    isOpen={!!openSections[child.props.label]}
                    label={child.props.label}
                    onClick={onClick}
                >
                    {child.props.children}
                </AccordionSection>
             ))}
            </div>
        );
    }
}