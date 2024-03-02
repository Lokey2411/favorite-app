import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../store/context";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { removeFavorite, addFavorite } from "../store/redux/favorite.reducer";

const Home = () => {
	const navigation = useNavigation<any>();
	const favourite = useAppSelector((state) => state.favourite);
	const dispatch = useAppDispatch();
	const favoriteHandler = (id: string) => {
		if (favourite.includes(id)) {
			// removeFavoriteList(id);
			dispatch(removeFavorite(id));
		} else {
			dispatch(addFavorite(id));
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
			<Button
				title="View storage"
				onPress={async () => {
					console.log(await AsyncStorage.getAllKeys());
				}}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
