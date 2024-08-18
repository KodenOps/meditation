import { Slot, Stack } from 'expo-router';

export default function AffirmationLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='[itemId]'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
