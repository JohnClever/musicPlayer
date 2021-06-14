import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Marshmello, Button } from '../components';
import { SIZES, image, COLORS } from '../constant';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
	function renderItems() {
		return (
			<ScrollView
				style={{
					width: '100%',
					height: '100%',
					marginTop: -50,
				}}
				contentContainerStyle={{
					alignItems: 'center',
					paddingBottom: 30,
				}}
				showsVerticalScrollIndicator={false}
			>
				<Button
					albumName='Best of Marshmello'
					label='Marshmello'
					onPress={() => navigation.navigate('Player')}
					customContainerStyle={{
						backgroundColor: COLORS.secondary,
					}}
					customImage={image.marsh}
					customLabelStyle={{
						color: COLORS.primary,
					}}
					customLabelStyle2={{
						color: COLORS.lighgray,
					}}
					customButtonIcon={<MaterialIcons name='pause' size={24} color='white' />}
				/>
				<Button
					albumName='Pain'
					label='Akatsuki'
					onPress={() => {
						console.warn('Pain pressed');
					}}
					customContainerStyle={{
						backgroundColor: COLORS.primary,
					}}
					customImage={image.pain}
					customLabelStyle={{
						color: COLORS.secondary,
					}}
					customLabelStyle2={{
						color: COLORS.lighgray,
					}}
					customButtonIcon={<Ionicons name='ios-play' size={24} color='black' />}
				/>
				<Button
					albumName='Space'
					label='Waakye'
					onPress={() => {
						console.warn('Space Pressed');
					}}
					customContainerStyle={{
						backgroundColor: COLORS.primary,
					}}
					customLabelStyle={{
						color: COLORS.secondary,
					}}
					customLabelStyle2={{
						color: COLORS.lighgray,
					}}
					customImage={image.spiderfall}
					customButtonIcon={<Ionicons name='ios-play' size={24} color='black' />}
				/>
			</ScrollView>
		);
	}
	return (
		<SafeAreaView
			style={{
				width: SIZES.width,
				height: SIZES.height,
				marginTop: SIZES.padding * 2,
				alignItems: 'center',
			}}
		>
			<Marshmello />
			{renderItems()}
		</SafeAreaView>
	);
};
export default Home;
