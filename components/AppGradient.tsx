import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

const AppGradients = ({
	children,
	colors,
}: {
	children: any;
	colors: string[];
}) => {
	return (
		<LinearGradient
			colors={colors}
			className='flex-1'>
			<Content>{children}</Content>
		</LinearGradient>
	);
};

export default AppGradients;
