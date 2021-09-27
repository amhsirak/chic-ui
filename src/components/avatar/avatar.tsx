import React from 'react'
import { StyledAvatar, StyledImage, StyledBadge, StyledSpan } from './styled'; 

export interface AvatarProps {
    src?: string;
    className?: string;
    name?: string;
    hasBadge?: boolean;
    isActive?: boolean;
}

export const Avatar: React.ForwardRefRenderFunction<HTMLSpanElement, AvatarProps> = (props, ref) => {
    const {
        src,
        className,
        name,
        hasBadge = false,
        isActive = false,
        ...rest
    } = props;
    return(
       <StyledAvatar
       src={src}
       ref={ref}
       isActive={isActive}
       {...rest}
       >
           {hasBadge && <StyledBadge />}
           {src ? (
               <StyledImage alt={name} src={src} {...rest} />
           ) : (
               <StyledSpan {...rest}>
                   {name}
                </StyledSpan>
           )}
       </StyledAvatar>
    );
}

export default React.forwardRef<HTMLSpanElement, AvatarProps>(Avatar);
