import styled from 'styled-components';

interface StyledSkeletonProps {
  width: number;
  height: number;
  borderRadius: string;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  position: relative;
  overflow: hidden;
  width: ${(pr) => pr.width}px;
  height: ${(pr) => pr.height}px;
  border-radius: ${(pr) => pr.borderRadius};
  background-color: #e3e3e3;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -${(pr) => pr.width}px;
    top: 0;
    height: ${(pr) => pr.height}px;
    width: ${(pr) => pr.width}px;
    background-color: #cccccc;
    animation: load 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation-iteration-count: infinite;
  }

  @keyframes load {
    from {
      left: -${(pr) => pr.width}px;
    }
    to {
      left: 100%;
    }
  }
`;
