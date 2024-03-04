import styled from 'styled-components';

const StyledBox = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ $color }) => $color};
`;

export { StyledBox };
