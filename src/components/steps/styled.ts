import { themeType } from 'src/tokens/themes';
import styled from 'styled-components';
import { stepsDirection } from './steps';

interface StepListProps {
  dir: stepsDirection;
}

export const StepsList = styled.ul<StepListProps>`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: ${({ dir }) => (dir === 'horizontal' ? 'center' : '')};
  align-items: ${({ dir }) => (dir === 'horizontal' ? 'center' : '')};
  flex-direction: ${({ dir }) => (dir === 'vertical' ? 'column' : '')}; ;
`;

/** Step Styles */

interface StepItemProps {
  dir: stepsDirection;
}

interface StepContentProps {
  dir: stepsDirection;
}

interface StepIconProps {
  type: themeType;
  styles: any;
}

interface StepSeparatorWrapperProps {
  dir: stepsDirection;
}

interface StepSeparatorProps {
  styles: any;
  dir: stepsDirection;
}

export const StepItemWrapper = styled.li`
  width: 100%;
`;

export const StepItem = styled.div<StepItemProps>`
  display: flex;
  justify-content: ${({ dir }) => (dir === 'horizontal' ? 'center' : 'start')};
  text-align: ${({ dir }) => (dir === 'horizontal' ? 'center' : 'start')};
  width: ${({ dir }) => (dir === 'horizontal' ? '' : '100%')};
  position: relative;
`;

export const StepContent = styled.div<StepContentProps>`
  position: absolute;
  top: ${({ dir }) => (dir === 'horizontal' ? '32px' : '')};
  left: ${({ dir }) => (dir === 'vertical' ? '32px' : '')};
  margin-left: ${({ dir }) => (dir === 'vertical' ? '8px' : '')};
`;

export const StepIconWrapper = styled.div`
  position: relative;
`;

export const StepIcon = styled.div<StepIconProps>`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ styles }) => styles.bgColor};
  color: ${({ styles }) => styles.color};
  border: ${({ styles }) =>
    styles.borderColor ? `1px solid ${styles.borderColor}` : ''};
  border-radius: 32px;
`;

export const StepTitle = styled.p`
  margin-top: 8px;
`;
export const StepSubTitle = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #949494;
`;

export const StepSeparatorWrapper = styled.div<StepSeparatorWrapperProps>`
  width: ${({ dir }) => (dir === 'horizontal' ? '100%' : '')};
  min-height: ${({ dir }) => (dir === 'horizontal' ? '' : '3rem')};
  margin-left: ${({ dir }) => (dir === 'horizontal' ? '-5rem' : '16px')};
  margin-right: ${({ dir }) => (dir === 'horizontal' ? '-5rem' : '')};
  min-width: ${({ dir }) => (dir === 'horizontal' ? '6rem' : '')};
`;

export const StepSeparator = styled.div<StepSeparatorProps>`
  border-top: ${({ dir }) => (dir === 'horizontal' ? '1px solid' : '')};
  border-left: ${({ dir }) => (dir === 'vertical' ? '1px solid' : '')};
  border-color: ${({ styles }) => styles.separatorColor};
  height: ${({ dir }) => (dir === 'horizontal' ? '' : '3rem')};
  width: 100%;
`;
