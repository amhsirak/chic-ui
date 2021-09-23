import styled from 'styled-components';
import { ComponentSize, badgeHeights, badgeSidePaddings } from '../../config/sizes';
import { BadgeType } from './badge';

type StateColors = {
    regular: string;
}

const typeColors: {
    [key in BadgeType]: StateColors
} = {
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
}