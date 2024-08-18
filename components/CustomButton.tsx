import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
// import { tw } from 'react-native-tailwindcss';

interface CustomButtonProps {
	onPress: () => void;
	title: string;
	color: string;
	textStyles?: string;
	containerStyles?: string;
}
const CustomButton = ({
	onPress,
	title,
	color,
	textStyles = '',
	containerStyles = '',
}: CustomButtonProps) => {
	let count = 1;
	// const onPressed = () => {
	// 	console.log('Button Pressed', count);
	// 	++count;
	// };
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={tw`${
				containerStyles ? containerStyles : ''
			} bg-${color} rounded-xl h-12 mb-4 justify-center items-center`}
			onPress={onPress}>
			<Text style={tw`${textStyles ? textStyles : ''} font-semibold text-lg`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};
export default CustomButton;
