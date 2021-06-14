import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SIZES, image, COLORS, FONTS } from '../constant';

const Button = ({
	albumName,
	label,
	onPress,
	customContainerStyle,
	customImage,
	customLabelStyle,
	customLabelStyle2,
	customButtonIcon,
}) => {
	return (
		<TouchableOpacity
			style={{
				width: '85%',
				height: 100,
				flex: 3,
				borderRadius: SIZES.radius,
				marginTop: SIZES.radius * 3,
				...customContainerStyle,
			}}
			onPress={onPress}
		>
			{/* Image */}
			<Image
				source={customImage}
				resizeMode='cover'
				style={{
					width: '25%',
					height: 75,
					position: 'absolute',
					top: 0,
					marginTop: -25,
					marginLeft: 20,
					borderRadius: SIZES.radius,
				}}
			/>

			<View
				style={{
					width: '50%',
					marginLeft: '30%',
					height: '100%',
					justifyContent: 'center',
				}}
			>
				{/* Text */}
				<Text
					style={{
						marginLeft: 15,
						...FONTS.h3,
						...customLabelStyle,
					}}
				>
					{albumName}
				</Text>
				<Text
					style={{
						marginLeft: 15,
						...FONTS.body4,
						...customLabelStyle2,
					}}
				>
					{label}
				</Text>
				{/* Icon */}
				{/* {customButtonIcon} */}
			</View>
			<View
				style={{
					width: '20%',
					height: '100%',
					position: 'absolute',
					right: 0,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{customButtonIcon}
			</View>
		</TouchableOpacity>
	);
};

export default Button;
