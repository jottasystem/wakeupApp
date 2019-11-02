import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../styles/colors';

export default class ButtonCustom extends React.Component {

	render() {
		const props = this.props;
		const btnStyle = {
			container: {
				opacity: props.disabled ? 0.5 : null,
				flexDirection: 'row',
				backgroundColor: props.btncolor ? props.btncolor : colors.white_two,
				width: props.width ? props.width : '100%',
				height: props.height ? props.height : 52,

				borderRadius: props.borderRadius ? props.borderRadius : 30,


				borderWidth: props.borderWidth ? props.borderWidth : 0.6,
				borderColor: props.borderColor ? props.borderColor : colors.mainPurble,
				marginVertical: props.marginVertical ? props.marginVertical : 25,
				marginLeft: props.marginLeft ? props.marginLeft : 0,
				marginHorizontal: props.marginHorizontal ? props.marginHorizontal : 0,
				marginTop: props.marginTop ? props.marginTop : 15,

				paddingHorizontal: props.paddingHorizontal ? props.paddingHorizontal : 24,
				marginBottom: props.marginBottom ? props.marginBottom : 0,
				justifyContent: 'center',
				alignItems: 'center',
				// borderRadius: 3,
				// shadowColor: colors.line_text,
				// shadowOffset: { width: 0, height: 3 },
				// shadowOpacity: 0.2,
				// shadowRadius: 1,
				// elevation: 7,
			},
			text: {
				flex: 1,
				color: props.textcolor ? props.textcolor : colors.mainPurble,
				fontWeight: 'bold',
				paddingVertical: 10,
				fontSize: props.fontSize ? props.fontSize : 14,
				textAlign: "center",
			},
			iconArrow: {
				height: 20,
				width: 30,
				position: 'absolute',
				right: 10,
				alignItems: 'center',
			}
		}
		const iconArrow = <Icon name='long-arrow-alt-right' size={18} color={colors.white2} style={btnStyle.iconArrow} />;

		return (
			<TouchableOpacity
				disabled={this.props.disabled || this.props.loading}
				onPress={this.props.onPress}
				style={btnStyle.container}>
				{this.props.loading && <ActivityIndicator style={btnStyle.text} color={colors.black} animating />}

				{!this.props.loading && <Text style={btnStyle.text}>{this.props.text}</Text>}

				{this.props.iconArrow && iconArrow}
			</TouchableOpacity>
		);
	}
}