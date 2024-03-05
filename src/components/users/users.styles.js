import styled from 'styled-components';

const StyledUsers = styled.div`
	padding: 20px;
`;

const StyledText = styled.p`
	padding-bottom: 10px;
`;

const StyledButton = styled.button`
	background-color: aliceblue;
	border: none;
	color: indigo;
	font-size: 14px;
	font-weight: bold;
	margin-right: 5px;
	padding: 7px 10px;
	border-radius: 10px;
	&:disabled {
		background-color: grey;
	}
`;

export { StyledUsers, StyledText, StyledButton };
