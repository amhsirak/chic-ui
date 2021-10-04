import styled from 'styled-components';
import { SliderType } from './slider';

type StateColors = {
  thumb: string;
  track: string;
  hover: string;
};

const typeColors = (type: SliderType, isDisabled: boolean): StateColors => {
  if (isDisabled) {
    return {
      thumb: '#d3d3d3',
      track: '#d3d3d333',
      hover: 'transparent'
    };
  }
  switch (type) {
    case 'secondary':
      return {
        thumb: '#000000',
        hover: '#0000001A',
        track: '#00000033'
      };
    case 'danger':
      return {
        thumb: '#d93848',
        hover: '#d938481A',
        track: '#d9384833'
      };

    case 'warning':
      return {
        thumb: '#de9b00',
        hover: '#de9b001A',
        track: '#de9b0033'
      };

    case 'success':
      return {
        thumb: '#039e2f',
        hover: '#039e2f1A',
        track: '#039e2f33'
      };

    case 'light':
      return {
        thumb: '#faf7f7',
        hover: '#faf7f71A',
        track: '#faf7f733'
      };

    default:
      return {
        thumb: '#0018cf',
        hover: '#0018cf1A',
        track: '#0018cf33'
      };
  }
};

interface StyledSliderProps {
  innerType: SliderType;
  disabled: boolean;
}

export const StyledSlider = styled.input<StyledSliderProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  background: transparent;
  position: relative;

  // webkit track
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    background-color: ${(pr) => typeColors(pr.innerType, pr.disabled).track};
  }

  // webkit thumb
  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    cursor: ${(pr) => (pr.disabled ? 'default' : 'grab')};
    height: 2px;
    width: 2px;
    border-radius: 8px;
    transform: scale(6);
    transition: all 0.2s;
    border-width: 1px;
    border-color: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};
    background: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};

    &:hover {
      box-shadow: 0 0 0 1px
        ${(pr) => typeColors(pr.innerType, pr.disabled).hover};
    }
  }

  // moz track
  &::-moz-range-track {
    width: 100%;
    height: 2px;
    background-color: ${(pr) => typeColors(pr.innerType, pr.disabled).track};
  }

  // moz thumb
  &::-moz-range-thumb {
    appearance: none;
    -moz-appearance: none;
    cursor: ${(pr) => (pr.disabled ? 'default' : 'grab')};
    height: 2px;
    width: 2px;
    border-radius: 8px;
    transform: scale(3);
    transition: all 0.2s;
    border-width: 1px;
    border-color: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};
    background: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};

    &:hover {
      box-shadow: 0 0 0 2px
        ${(pr) => typeColors(pr.innerType, pr.disabled).hover};
    }
  }

  &::-moz-range-progress {
    height: 2px;
    background-color: ${(pr) => typeColors(pr.innerType, pr.disabled).track};
  }

  &::-ms-track {
    width: 100%;
    height: 2px;
    background-color: ${(pr) => typeColors(pr.innerType, pr.disabled).track};
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    height: 2px;
    background-color: ${(pr) => typeColors(pr.innerType, pr.disabled).track};
  }

  &::-ms-thumb {
    appearance: none;
    cursor: ${(pr) => (pr.disabled ? 'default' : 'grab')};
    height: 2px;
    width: 2px;
    border-radius: 8px;
    transform: scale(6);
    transition: all 0.2s;
    border-width: 1px;
    border-color: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};
    background: ${(pr) => typeColors(pr.innerType, pr.disabled).thumb};

    &:hover {
      box-shadow: 0 0 0 1px
        ${(pr) => typeColors(pr.innerType, pr.disabled).hover};
    }
  }

  &:focus::-moz-range-thumb {
    transform: scale(4);
  }

  &:focus::-webkit-slider-thumb {
    transform: scale(8);
  }

  &:focus::-ms-thumb {
    transform: scale(8);
  }
`;
