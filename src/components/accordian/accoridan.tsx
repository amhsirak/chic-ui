import React, { forwardRef, useRef } from 'react'
import { StyledAccordian, StyledDescription, StyledHeader } from './styled';

export interface AccoridanProps {
    header: string,
    description: string,
    classname?: string
}

const Accoridan: React.ForwardRefRenderFunction<unknown, AccoridanProps> = (props, ref) => {
    const { header, description, classname } = props;
    const toggleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    const toggleHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();

        if (toggleRef?.current?.className.includes("open") && descRef?.current?.className.includes("open")) {
            toggleRef.current.className = "accordian-toggle-button";
            descRef.current.className = descRef.current.className.replace("open", "");
            event.currentTarget.className = event.currentTarget.className.replace("open", "");
        } else {
            if (toggleRef && descRef) {
                if (toggleRef.current && descRef.current) {
                    toggleRef.current.className = "accordian-toggle-button open";
                    descRef.current.className = descRef.current.className.split(" ")[0] + " " + descRef.current.className.split(" ")[1] + " accordian-description open"
                    event.currentTarget.className = event.currentTarget.className.split(" ")[0] + " " + event.currentTarget.className.split(" ")[1] + " accordian-header open"
                }
            }
        }

    }

    return (
        <StyledAccordian className={classname}>
            <StyledHeader className='accordian-header' onClick={toggleHandler}><div ref={toggleRef} className='accordian-toggle-button'><span></span></div>{header}</StyledHeader>
            <StyledDescription className='accordian-description' ref={descRef}>{description}</StyledDescription>
        </StyledAccordian >
    )
}

export default Accoridan