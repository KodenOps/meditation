import { View, Text } from 'react-native';
import React from 'react';

interface PageHeader {
	headers: string;
	subheader: string;
}

const PageHeader = ({ headers, subheader }: PageHeader) => {
	return (
		<View className='mb-6 '>
			<Text className='text-gray-200 mb-1 font-bold text-2xl text-left'>
				{headers}
			</Text>
			<Text className='text-indigo-100 text-lg font-regular'>{subheader}</Text>
		</View>
	);
};

export default PageHeader;
