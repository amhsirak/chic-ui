import { ComponentSize } from '../../tokens/sizes';
import CrossIcon from '../../icons/Cross';
interface StyledWrapperProps {
    width: string;
    innerSize: ComponentSize;
}
export declare const StyledWrapper: import("styled-components").StyledComponent<"div", any, StyledWrapperProps, never>;
interface StyledTextInputProps {
    innerSize: ComponentSize;
    disabled: boolean;
    error: boolean;
    width: string;
    withIcon: boolean;
    withCross: boolean;
    isSearch: boolean;
}
export declare const StyledTextInput: import("styled-components").StyledComponent<"input", any, StyledTextInputProps, never>;
interface StyledIconProps {
    innerSize: ComponentSize;
}
export declare const StyledIcon: import("styled-components").StyledComponent<"div", any, StyledIconProps, never>;
interface StyledCrossProps {
    innerSize: ComponentSize;
}
export declare const StyledCross: import("styled-components").StyledComponent<typeof CrossIcon, any, StyledCrossProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map