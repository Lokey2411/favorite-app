import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../store/context";
import FavoriteEmpty from "./FavoriteEmpty";
import FavoriteList from "./Favorite";

const Favorite = () => {
	const { favoriteList } = useContext(UserContext);
	return favoriteList.length > 0 ? <FavoriteList /> : <FavoriteEmpty />;
};

export default Favorite;

const styles = StyleSheet.create({});
