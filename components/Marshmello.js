import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { SIZES, image, COLORS, FONTS } from '../constant';

const Marshmello = () => {
	return (
		<View
			style={{
				width: '100%',
				height: 400,
				marginTop: SIZES.padding,
				alignItems: 'center',
			}}
		>
			<View
				style={{
					...styles.shadow,
					width: '85%',
					height: 250,
					backgroundColor: COLORS.primary,
					borderRadius: SIZES.radius,
					marginTop: SIZES.padding,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					source={image.marsh}
					resizeMode='cover'
					style={{
						width: '50%',
						height: '50%',
					}}
				/>
			</View>
			<Text
				style={{
					marginTop: SIZES.padding,
					marginLeft: '-35%',
					fontWeight: '800',
					color: COLORS.secondary,
					...FONTS.h3,
				}}
			>
				Best of Marshmello
			</Text>
			<Text
				style={{
					marginTop: SIZES.base,
					marginLeft: '-47%',
					fontWeight: '800',
					color: COLORS.lighgray,
					...FONTS.body3,
				}}
			>
				Marshmello
			</Text>
		</View>
	);
};

export default Marshmello;

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 15,
	},
});
