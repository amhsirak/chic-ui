import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import CrossIcon from '../../icons/Cross';
import {
  StyledDrawerBody,
  StyledDrawerClose,
  StyledDrawerContainer,
  StyledDrawerFooter,
  StyledDrawerHeader,
  StyledDrawerWrapper
} from './styled';

export type Placement = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  size?: 'default' | 'large';
  closable?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: () => void;
  placement?: Placement;
  open?: boolean;

  /** Container */
  container?: HTMLElement;

  /** Wrapper dom node style of header and body */
  drawerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;

  /** Dom Nodes */
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;

  /** Height for top and bottom placement. Will override size property  */
  height?: number;

  /** Width for top and bottom placement. Will override size property  */
  width?: number;
}

const drawerSize = {
  default: '378px',
  large: '736px'
};

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (
  props,
  ref
) => {
  const {
    size = 'default',
    closable = true,
    onClose,
    closeIcon = <CrossIcon />,
    placement = 'right',
    open = false,
    container = document.body,
    drawerStyle,
    headerStyle,
    header,
    bodyStyle,
    children,
    footerStyle,
    footer,
    height,
    width
  } = props;

  const handleOnClose = useCallback(() => {
    if (closable && onClose && typeof onClose === 'function') {
      onClose();
    }
  }, [onClose, closable]);

  let customHeight = '100%';
  let customWidth = '100%';

  if (['left', 'right'].includes(placement)) {
    if (width) {
      customWidth = `${width}px`;
    } else {
      customWidth = drawerSize[size];
    }
  } else {
    if (height) {
      customHeight = `${height}px`;
    } else {
      customHeight = drawerSize[size];
    }
  }
  const drawer = (
    <StyledDrawerWrapper
      ref={ref}
      tabIndex={-1}
      open={open}
      onClick={handleOnClose}
    >
      <StyledDrawerContainer
        height={customHeight}
        width={customWidth}
        placement={placement}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={drawerStyle}
        open={open}
      >
        <StyledDrawerHeader style={headerStyle}>
          {closable && (
            <StyledDrawerClose onClick={handleOnClose} aria-label="close">
              {closeIcon}
            </StyledDrawerClose>
          )}
          {header || <>&shy;</>}
        </StyledDrawerHeader>
        <StyledDrawerBody style={bodyStyle}>{children}</StyledDrawerBody>
        {footer && (
          <StyledDrawerFooter style={footerStyle}>{footer}</StyledDrawerFooter>
        )}
      </StyledDrawerContainer>
    </StyledDrawerWrapper>
  );
  return ReactDOM.createPortal(drawer, container);
};

export default React.forwardRef<HTMLDivElement, DrawerProps>(Drawer);
