import { themeType } from 'src/tokens/themes';
import { stepsDirection } from './steps';
interface StepListProps {
    dir: stepsDirection;
}
export declare const StepsList: import("styled-components").StyledComponent<"ul", any, StepListProps, never>;
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
export declare const StepItemWrapper: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const StepItem: import("styled-components").StyledComponent<"div", any, StepItemProps, never>;
export declare const StepContent: import("styled-components").StyledComponent<"div", any, StepContentProps, never>;
export declare const StepIconWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StepIcon: import("styled-components").StyledComponent<"div", any, StepIconProps, never>;
export declare const StepTitle: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const StepSubTitle: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const StepSeparatorWrapper: import("styled-components").StyledComponent<"div", any, StepSeparatorWrapperProps, never>;
export declare const StepSeparator: import("styled-components").StyledComponent<"div", any, StepSeparatorProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map