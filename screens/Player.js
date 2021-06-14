import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Marshmello } from '../components';
import { SIZES, image, COLORS } from '../constant';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const Player = () => {
	const navigation = useNavigation();
	// renderReader
	function renderReader() {
		return (
			<View
				style={{
					width: '85%',
					height: 100,
					// backgroundColor: 'red',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Slider
					style={{ width: '100%', height: 40 }}
					minimumValue={0}
					maximumValue={1}
					minimumTrackTintColor='#000'
					maximumTrackTintColor='#808588'
					thumbTintColor='#000'
				/>
				<Text
					style={{
						position: 'absolute',
						left: 0,
						color: '#808588',
						top: 0,
						marginTop: 60,
						marginLeft: 15,
					}}
				>
					2.04
				</Text>
				<Text
					style={{
						position: 'absolute',
						right: 0,
						color: '#808588',
						top: 0,
						marginTop: 60,
						marginRight: 15,
					}}
				>
					10.30
				</Text>
			</View>
		);
	}
	// renderIcons
	function renderIcons() {
		return (
			<View
				style={{
					width: '85%',
					height: 80,
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				{/* back */}
				<TouchableOpacity onPress={() => console.warn('back pressed')}>
					<AntDesign name='back' size={24} color='black' style={{ padding: SIZES.padding }} />
				</TouchableOpacity>
				{/* heart */}
				<TouchableOpacity onPress={() => console.warn('heart pressed')}>
					<AntDesign name='heart' size={24} color='black' style={{ padding: SIZES.padding }} />
				</TouchableOpacity>

				{/* shuffle */}
				<TouchableOpacity onPress={() => console.warn('shuffle pressed')}>
					<Ionicons name='md-shuffle' size={24} color='black' style={{ padding: SIZES.padding }} />
				</TouchableOpacity>
			</View>
		);
	}
	// renderFooter
	function renderFooter() {
		return (
			<View
				style={{
					width: '85%',
					height: 120,
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					marginTop: -15,
				}}
			>
				{/* playskipback */}
				<TouchableOpacity onPress={() => console.warn('play skip back pressed')}>
					<Ionicons name='play-skip-back' size={40} color='black' style={{ padding: SIZES.padding - 6 }} />
				</TouchableOpacity>

				{/* pausecircle */}
				<TouchableOpacity onPress={() => console.warn('pause circle pressed')}>
					<Ionicons name='md-pause-circle' size={60} color='black' style={{ padding: SIZES.padding - 6 }} />
				</TouchableOpacity>
				{/* playskipforward */}
				<TouchableOpacity onPress={() => console.warn('play skip forward pressed')}>
					<Ionicons name='play-skip-forward' size={40} color='black' style={{ padding: SIZES.padding - 6 }} />
				</TouchableOpacity>
			</View>
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
			<TouchableOpacity
				style={{
					position: 'absolute',
					left: 0,
					marginLeft: SIZES.padding,
				}}
				onPress={() => navigation.goBack()}
			>
				<Ionicons name='chevron-back' size={24} color='black' />
			</TouchableOpacity>
			<Marshmello />
			{renderReader()}
			{renderIcons()}
			{renderFooter()}
		</SafeAreaView>
	);
};

export default Player;
