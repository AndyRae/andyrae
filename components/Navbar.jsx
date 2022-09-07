import NextLink from 'next/link';
import { Box, Flex, Link, Button, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const NavLink = ({ link, children }) => (
	<NextLink href={link} passHref>
		<Link
			px={2}
			py={1}
			_hover={{
				textDecoration: 'none',
			}}
			href={link}
			borderBottomColor='green.200'
			borderBottomWidth='2px'
		>
			{children}
		</Link>
	</NextLink>
);

const Links = [
	{
		text: 'Home',
		href: '/',
	},
	{
		text: 'About',
		href: '/about',
	},
	{
		text: 'Projects',
		href: '/projects',
	},
];

export const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg='light' px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box></Box>

					<Flex alignItems={'center'}>
						<Stack direction={'row'} spacing={6}>
							{Links.map((link) => (
								<NavLink key={link.text} link={link.href}>
									{link.text}
								</NavLink>
							))}

							<Button onClick={toggleColorMode} variant='ghost'>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
};
