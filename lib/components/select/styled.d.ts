import { ComponentSize } from '../../tokens/sizes';
import SvgArrowDown from '../../icons/ArrowDown';
import Cross from '../../icons/Cross';
interface SelectWrapperProps {
    width: string;
}
export declare const SelectWrapper: import("styled-components").StyledComponent<"div", any, SelectWrapperProps, never>;
interface SelectOptionProps {
    selected?: boolean;
}
export declare const SelectOption: import("styled-components").StyledComponent<"li", any, SelectOptionProps, never>;
interface StyledSelectDivProps {
    error: boolean;
    innerSize: ComponentSize;
    disabled: boolean;
}
export declare const StyledSelectDiv: import("styled-components").StyledComponent<"div", any, StyledSelectDivProps, never>;
export declare const SelectOptionWrapper: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const ArrowDown: import("styled-components").StyledComponent<typeof SvgArrowDown, any, {}, never>;
export declare const StyledCross: import("styled-components").StyledComponent<typeof Cross, any, {}, never>;
export declare const MultiSelectOptionWrapper: import("styled-components").StyledComponent<"span", any, {}, never>;
export {};
//# sourceMappingURL=styled.d.ts.map