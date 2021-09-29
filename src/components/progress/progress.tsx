import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type ProgressType = 'default' | 'secondary' | 'danger' | 'warning' | 'success'| 'light';

interface ProgressBarProps {
    className?: string;
    min?: number;
    max?: number;
    label?: ReactNode;
    progress?: number;
    type?: ProgressType;
    striped?: boolean;
    animated?: boolean;
}