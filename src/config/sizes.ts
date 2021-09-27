export type ComponentSize = 'default' | 'small' | 'large' | 'extraLarge';

export const sidePaddings: {
    [key in ComponentSize]: number
} = {
    default: 25,
    small: 20,
    large: 30,
    extraLarge: 35
}

export const heights: {
    [key in ComponentSize]: number
} = {
    default: 45,
    small: 35,
    large: 55,
    extraLarge: 65
}