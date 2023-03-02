import React, { ReactNode } from 'react';
import { StyledBreadcrumb } from './styled';

import type { themeType } from 'src/tokens/themes';

interface BaseBreadcrumbProps {
  className?: string;
  separator?: ReactNode | string;
  style?: React.CSSProperties;
  type?: themeType;
}

interface BreadcrumbItemProps {
  children?: ReactNode;
}

interface BreadcrumbSeparatorProps {
  children?: ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator, type = 'primary', ...props }) => {
  let children = React.Children.toArray(props.children);

  const totalItems = children.length;
  const lastIndex = totalItems - 1;

  // * RETURNS CHILDREN WITH SEPARATORS
  children = children
    .map(toBreadcrumbItem)
    .reduce(withSeparator(lastIndex, separator), []);

  return <StyledBreadcrumb themeColor={type} {...props}>{children}</StyledBreadcrumb>;
};

const toBreadcrumbItem = (child: ReactNode, index: number) => (
  <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
);

const withSeparator =
  (lastIndex: number, separator: ReactNode) =>
  (acc: any, child: ReactNode, index: number) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push([
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>
      ]);
    } else {
      acc.push(child);
    }
    return acc;
  };

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  ...props
}) => (
  <li className="breadcrumb-item" {...props}>
    {children}
  </li>
);

const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({
  children,
  ...props
}) => (
  <li className="breadcrumb-separator" {...props}>
    {children}
  </li>
);

export default Breadcrumb;
export type BreadcrumbProps = BaseBreadcrumbProps;
