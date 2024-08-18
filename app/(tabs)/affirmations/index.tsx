import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradients from '@/components/AppGradient';
import PageHeader from '@/components/PageHeader';
import GuidedAffirmationGallery from '@/components/GuidedAffirmationGallery';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

const Affirmations = () => {
	return (
		<View className='flex-1'>
			<AppGradients colors={['#2e1f58', '#54426b', '#a790af']}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<PageHeader
						headers='Welcome Stein,'
						subheader='Change Your Belief With Affirmation'
					/>
					<View>
						{AFFIRMATION_GALLERY.map((g) => (
							<GuidedAffirmationGallery
								key={g.title}
								title={g.title}
								previews={g.data}
							/>
						))}
					</View>
				</ScrollView>
			</AppGradients>
		</View>
	);
};

export default Affirmations;
