import {
	View,
	Text,
	ImageBackground,
	Pressable,
	ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradients from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
const AffirmationPractice = () => {
	const { itemId } = useLocalSearchParams();
	const router = useRouter();
	const [Affirmation, setAffirmation] = useState<GalleryPreviewData>();
	const [sentences, setsentences] = useState<string[]>([]);
	useEffect(() => {
		for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
			const affirmationData = AFFIRMATION_GALLERY[i].data;

			const AffirmationToStart: any = affirmationData.find(
				(a) => a.id === Number(itemId)
			);

			if (AffirmationToStart) {
				setAffirmation(AffirmationToStart);
				const affirmationAray = AffirmationToStart.text.split('.');
				// remove last element if it is empty string
				if (affirmationAray[affirmationAray.length - 1] === '') {
					affirmationAray.pop();
					setsentences(affirmationAray);
				}

				return;
			}
		}
	}, []);
	return (
		<View className=' flex-1'>
			<ImageBackground
				source={Affirmation?.image}
				resizeMode='cover'
				className='flex-1'>
				<AppGradients colors={['rgba(0,0,0,0.3)', 'rgba(0, 0, 0, 0.9)']}>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-16 left-6 z-10'>
						<AntDesign
							name='leftcircleo'
							size={40}
							color='white'
						/>
					</Pressable>
					<ScrollView
						className='mt-20'
						showsVerticalScrollIndicator={false}>
						<View className='h-full justify-center'>
							<View className='mt-4 justify-center'>
								{sentences?.map((sentence, index) => (
									<Text
										className='text-3xl text-white text-center mb-4'
										key={index}>
										{sentence}.
									</Text>
								))}
							</View>
						</View>
					</ScrollView>
				</AppGradients>
			</ImageBackground>
		</View>
	);
};

export default AffirmationPractice;
