import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";

type Props = {
	text: string;
} & TouchableOpacityProps;
const Card = ({ text, ...props }: Props) => {
	return (
		<TouchableOpacity {...props}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
};

export default Card;

const styles = StyleSheet.create({});
