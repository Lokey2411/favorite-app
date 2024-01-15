import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { STYLES } from "../../styles";

const FavoriteEmpty = () => {
	return (
		<View style={STYLES.container}>
			<Text style={STYLES.title}>Favorite is Empty</Text>
		</View>
	);
};

export default FavoriteEmpty;

const styles = StyleSheet.create({});
