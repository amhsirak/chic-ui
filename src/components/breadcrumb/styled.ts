import styled from 'styled-components';

interface StyledBreadcrumbProps {}

export const StyledBreadcrumb = styled.ol<StyledBreadcrumbProps>`
	list-style: none;
	display: flex;
	align-items: center;
	display: flex;
	flex-direction: row;

	.breadcrumb-separator {
		display: flex;
		align-items: center;
		color: #333;
		margin: auto 6px;
		user-select: none;
	}
`;
