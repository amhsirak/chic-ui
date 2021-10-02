import styled from "styled-components";
import {ComponentSize, heights} from "../../config/sizes";
import {SwitchPadding, SwitchType} from "./switch";

type SwitchBackgrounds = SwitchType | 'disabled' | 'unchecked'

const typeColors: {
    [key in SwitchBackgrounds]: string
} = {
    default: '#0018cf',
    secondary: '#000',
    danger: '#d93848',
    warning: '#de9b00',
    success: '#039e2f',
    disabled: '#efefef',
    unchecked: '#c0c0c0',
};

const paddingNumbers: {
    [key in SwitchPadding]: number
} = {
    small: 1,
    default: 2,
    large: 4
};

interface SwitchWrapperProps {
    type: SwitchType
    size: ComponentSize
    checked: boolean
    disabled: boolean
    padding: SwitchPadding
}


function getBackgroundColor(props: Pick<SwitchWrapperProps, 'disabled' | 'checked' | 'type'>): string {
    if (props.disabled) {
        return typeColors['disabled']
    }
    if (!props.checked) {
        return typeColors['unchecked']
    }
    return typeColors[props.type]
}

export const SwitchWrapper = styled.div<SwitchWrapperProps>`
  background-color: ${getBackgroundColor};
  padding: ${props => paddingNumbers[props.padding]}px;
  height: ${props => heights[props.size]}px;
  width: ${props => heights[props.size] * 2}px;
  border-radius: ${props => heights[props.size] / 2}px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 250ms ease-in-out;
`

SwitchWrapper.displayName = "SwitchWrapper"

interface SwitchToggleProps {
    type: SwitchType
    size: ComponentSize
    checked: boolean
    padding: SwitchPadding
    disabled: boolean
}

export const SwitchToggle = styled.div<SwitchToggleProps>`
  aspect-ratio: 1;
  width: ${props => heights[props.size] - paddingNumbers[props.padding] * 2}px;
  height: ${props => heights[props.size] - paddingNumbers[props.padding] * 2}px;
  background-color: ${props => props.disabled ? '#c0c0c0' : '#fff'};
  transition: all 250ms ease-in-out;
  transform: translateX(${props => props.checked ? (heights[props.size]) : 0}px);
  border-radius: ${props => heights[props.size] / 2}px;
`

SwitchToggle.displayName = "SwitchToggle"
