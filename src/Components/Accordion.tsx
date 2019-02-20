import * as React from 'react';

import AccordionSection from './AccordionSection';

export default class Accordion extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        const openSections = {};

        this.props.children.forEach(child => {
            if(child.props.isOpen) {
                openSections[child.props.label] = true;
            }
        })

        this.state = { openSections };
    }

    onClick = label => {
        const {
            props: {allowMultipleOpen},
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];
        if (allowMultipleOpen) {
            this.setState({
                openSections: {
                    ...openSections,
                    [label]: !isOpen
                }
            });
        } else {
            this.setState({
                openSections: {
                    [label]: !isOpen
                }
            });
        }
    };

    render() {
        const{
            onClick,
            props: { children },
            state: { openSections},
        } = this;

        return (
            <div>
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