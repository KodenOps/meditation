import { View, Text, Pressable, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradients from '@/components/AppGradient';

import { MEDITATION_DATA } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import PageHeader from '@/components/PageHeader';
const NatureMeditate = () => {
	const router = useRouter();
	return (
		<View className='flex-1'>
			<AppGradients colors={['#161b2e', '#0a4d4a', '#766e67']}>
				<PageHeader
					headers='Welcome Stein,'
					subheader='Start Your Meditation Practice Today'
				/>
				<View>
					<FlatList
						data={MEDITATION_DATA}
						className='mb-20'
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable
								onPress={() => router.push(`/meditate/${item.id}`)}
								className='h-48 my-3 rounded-md overflow-hidden'>
								<ImageBackground
									source={MEDITATION_IMAGES[item.id - 1]}
									resizeMode='cover'
									className='flex-1 rounded-lg justify-center'>
									<LinearGradient
										colors={['transparent', 'rgba(0,0,0,0.8)']}
										className='flex-1 justify-center items-center'>
										<Text className='text-lg text-center text-slate-100 font-bold'>
											{item.title}
										</Text>
									</LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
					/>
				</View>
			</AppGradients>
			<StatusBar style='light' />
		</View>
	);
};

export default NatureMeditate;
