import { StyleSheet } from "react-native";
import React from "react";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { useAppSelector } from "../store/redux";
import { getUser } from "../controller/storage.controller";

const RootStack = () => {
	const user = {
		phoneNumber: "",
		email: "",
	};
	const isLoggedIn = !!getUser();
	return user.phoneNumber || isLoggedIn ? <HomeStack /> : <AuthStack />;
};

export default RootStack;

const styles = StyleSheet.create({});
