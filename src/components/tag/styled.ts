import styled from 'styled-components';
import { TagType } from './tag';

type StateColors = {
  regular: string;
};

const typeColors: Record<TagType, StateColors> = {
  default: {
    regular: '#0018cf'
  },
  secondary: {
    regular: '#000'
  },
  danger: {
    regular: '#d93848'
  },
  warning: {
    regular: '#de9b00'
  },
  success: {
    regular: '#039e2f'
  },
  light: {
    regular: '#edede4'
  }
};

interface StyledTagProps {
  innerType: TagType;
  withText: boolean;
  rounded: boolean;
}

// Real HTML tag is assigned dynamically
export const StyledTag = styled.span<StyledTagProps>`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  padding: 4.6px 15px;
  height: 0 25px;
  background-color: ${(pr) => typeColors[pr.innerType].regular};
  color: ${(pr) => (pr.innerType === 'light' ? '#000' : '#fff')};
  // Rounded
  ${(pr) => (pr.rounded ? `border-radius: 14px;` : '')}
`;
