import React, { ReactNode } from 'react';
import { themeType, theme as typeColors } from '../../tokens/themes';
import {
  StepContent,
  StepIcon,
  StepIconWrapper,
  StepItem,
  StepItemWrapper,
  StepSeparator,
  StepSeparatorWrapper,
  StepSubTitle,
  StepTitle
} from './styled';

type stepsDirection = 'horizontal' | 'vertical';

interface StepProps {
  type?: themeType;
  disabled?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
  index?: number;
  activeIndex?: number;
  length?: number;
  onChange?: (active: number) => void;
  divider?: ReactNode;
  direction?: stepsDirection;
}

type StepState = 'done' | 'active' | 'pending';

const Step: React.ForwardRefRenderFunction<HTMLLIElement, StepProps> = (
  props,
  ref
) => {
  const {
    type,
    icon,
    index,
    activeIndex,
    length,
    title,
    subTitle,
    onChange = (active: number) => {},
    divider,
    direction
  } = props;

  let state: StepState = index < activeIndex ? 'done' : 'pending';

  let iconStyles = {
    bgColor: '#ffff',
    color: state === 'done' ? typeColors[type].bgColor : '#949494',
    borderColor: state === 'done' ? typeColors[type].bgColor : '#949494',
    separatorColor: state === 'done' ? typeColors[type].bgColor : '#949494'
  };

  if (activeIndex === index) {
    state = 'active';
    iconStyles.bgColor = typeColors[type].bgColor;
    iconStyles.color = typeColors[type].color;
    iconStyles.borderColor = '';
  }

  const renderIcon = (index: number) =>
    icon || (
      <StepIcon styles={iconStyles} type={type}>
        {index + 1}
      </StepIcon>
    );

  return (
    <>
      <StepItemWrapper ref={ref}>
        <StepItem dir={direction}>
          <StepIconWrapper onClick={() => onChange(index)}>
            {renderIcon(index)}
          </StepIconWrapper>
          <StepContent dir={direction}>
            {title && <StepTitle>{title}</StepTitle>}
            {subTitle && <StepSubTitle>{subTitle}</StepSubTitle>}
          </StepContent>
        </StepItem>
      </StepItemWrapper>
      {index !== length - 1 && (
        <StepSeparatorWrapper dir={direction}>
          {divider || (
            <StepSeparator dir={direction} styles={iconStyles}></StepSeparator>
          )}
        </StepSeparatorWrapper>
      )}
    </>
  );
};

export default React.forwardRef<HTMLLIElement, StepProps>(Step);
