import { ComponentSize } from '../../config/sizes';
import { themeType } from '../../config/themes';
interface SwitchWrapperProps {
    type: themeType;
    size: ComponentSize;
    checked: boolean;
    disabled: boolean;
    padding: ComponentSize;
}
export declare const SwitchWrapper: import("styled-components").StyledComponent<"div", any, SwitchWrapperProps, never>;
interface SwitchToggleProps {
    type: themeType;
    size: ComponentSize;
    checked: boolean;
    padding: ComponentSize;
    disabled: boolean;
}
export declare const SwitchToggle: import("styled-components").StyledComponent<"div", any, SwitchToggleProps, never>;
export {};
//# sourceMappingURL=styled.d.ts.map