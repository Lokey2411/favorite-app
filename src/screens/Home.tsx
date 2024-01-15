import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../store/context";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const navigation = useNavigation<any>();
	const { addFavoriteList, removeFavoriteList, favoriteList } = useContext(UserContext);
	const favoriteHandler = (id: string) => {
		if (favoriteList.includes(id)) {
			removeFavoriteList(id);
		} else {
			addFavoriteList(id);
		}
		console.log("Success");
	};
	return (
		<View>
			<Card
				text="item1"
				onPress={() => {
					favoriteHandler("item1");
				}}
			/>
			<Card
				text="item2"
				onPress={() => {
					favoriteHandler("item2");
				}}
			/>
			<Card
				text="item3"
				onPress={() => {
					favoriteHandler("item3");
				}}
			/>
			<Button
				onPress={() => {
					navigation.navigate("Favorite");
				}}
				title="Favorite"
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
