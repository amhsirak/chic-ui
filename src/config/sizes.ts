export type ComponentSize = 'default' | 'small' | 'large' | 'extraLarge';

export const sidePaddings: {
    [key in ComponentSize]: number
} = {
    default: 22,
    small: 19,
    large: 25,
    extraLarge: 28
}

export const heights: {
    [key in ComponentSize]: number
} = {
    default: 40,
    small: 33,
    large: 47,
    extraLarge: 54
}