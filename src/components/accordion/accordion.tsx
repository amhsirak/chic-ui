import React, { forwardRef, useRef } from 'react'
import { StyledAccordion, StyledDescription, StyledDescriptionWrapper, StyledHeader } from './styled';

export interface AccordionProps {
    header: string,
    description: string,
    className?: string
}

const Accordion: React.ForwardRefRenderFunction<HTMLDivElement, AccordionProps> = (props, ref) => {
    const { header, description, className } = props;
    const toggleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    const toggleHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();

        if (toggleRef?.current?.className.includes("open") && descRef?.current?.className.includes("open")) {
            toggleRef.current.className = "accordion-toggle-button";
            descRef.current.className = descRef.current.className.replace("open", "close");
            event.currentTarget.className = event.currentTarget.className.replace("open", "");
        } else {
            if (toggleRef && descRef) {
                if (toggleRef.current && descRef.current) {
                    toggleRef.current.className = "accordion-toggle-button open";
                    descRef.current.className = descRef.current.className.split(" ")[0] + " " + descRef.current.className.split(" ")[1] + " accordion-description open"
                    event.currentTarget.className = event.currentTarget.className.split(" ")[0] + " " + event.currentTarget.className.split(" ")[1] + " accordion-header open"
                }
            }
        }

    }

    return (
        <StyledAccordion ref={ref} className={className}>
            <StyledHeader className='accordion-header' onClick={toggleHandler}><div ref={toggleRef} className='accordion-toggle-button'><span></span></div>{header}</StyledHeader>
            <StyledDescriptionWrapper className='desc-wrapper'><StyledDescription className='accordion-description close' ref={descRef}>{description}</StyledDescription></StyledDescriptionWrapper>
        </StyledAccordion >
    )
}

export default forwardRef<HTMLDivElement, AccordionProps>(Accordion);