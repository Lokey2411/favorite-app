import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../store/context";

const FavoriteList = () => {
	const { favoriteList } = useContext(UserContext);
	return (
		<View>
			{favoriteList.map((item, index) => (
				<Text key={index}>{item}</Text>
			))}
		</View>
	);
};

export default FavoriteList;

const styles = StyleSheet.create({});
