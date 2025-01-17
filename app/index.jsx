import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import beachImage from '@/assets/meditation-images/beach.webp';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import AppGradients from '@/components/AppGradient';
const App = () => {
	const router = useRouter();
	return (
		<View className='flex-1 '>
			<ImageBackground
				source={beachImage}
				resizeMode='cover'
				className='flex-1'>
				<AppGradients
					// className='flex-1'
					colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
					<SafeAreaView className='flex-1 px-1  justify-between'>
						<View>
							<Text className='text-center text-white font-bold text-3xl'>
								App
							</Text>
							<Text className='text-center text-white text-xl mt-1'>
								Simplifying Meditation For Everyone
							</Text>
						</View>
						<View>
							<CustomButton
								onPress={() => router.push('/nature-meditate')}
								title='Get Started'
								color='white'
							/>
						</View>
						<StatusBar style='light' />
					</SafeAreaView>
				</AppGradients>
			</ImageBackground>
		</View>
	);
};

export default App;
