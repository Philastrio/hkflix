import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header``;

const List = styled.ul`
	display: flex;
	&:hover {
		background-color: aqua;
	}
`;

const item = styled.li``;

const SLink = styled(Link)``;

export default () => (
	<Header>
		<List>
			<item>
				<SLink to='/'>Movie</SLink>
			</item>
			<item>
				<SLink to='/tv'>TV</SLink>
			</item>
			<item>
				<SLink to='/search'>Search</SLink>
			</item>
		</List>
	</Header>
);