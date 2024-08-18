import { View, Text, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import meditationImages from '@/constants/meditation-images';
import AppGradients from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router';
const Meditate = () => {
	const { id } = useLocalSearchParams();
	return (
		<View className='flex-1'>
			<ImageBackground
				source={meditationImages[Number(id) - 1]}
				resizeMode='cover'
				className='flex-1'>
				<AppGradients colors={['transparent', 'rgba(0,0,0,0.8)']}>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-16 left-6 z-10'>
						<AntDesign
							name='leftcircleo'
							size={40}
							color='white'
						/>
					</Pressable>
				</AppGradients>
			</ImageBackground>
		</View>
	);
};

export default Meditate;
