import styled from 'styled-components';
import { ComponentSize, heights, sidePaddings } from '../../config/sizes';
import CrossIcon from '../../icons/Cross';

interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    position: relative;
    width: ${pr => pr.width};
    height: ${pr => heights[pr.innerSize]}px;
`;

interface StyledTextInputProps {
    innerSize: ComponentSize;
    disabled: boolean;
    error: boolean;
    width: string;
    withIcon: boolean;
    withCross: boolean;
}

