import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../store/context";
import { useAppDispatch, useAppSelector } from "../../store/redux";

const FavoriteList = () => {
	const favourite = useAppSelector((state) => state.favourite);

	return (
		<View>
			{favourite.map((item, index) => (
				<Text key={index}>{item}</Text>
			))}
		</View>
	);
};

export default FavoriteList;

const styles = StyleSheet.create({});
