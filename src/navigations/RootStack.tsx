import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { UserContext } from "../store/context";

const RootStack = () => {
	const { user } = useContext(UserContext);
	return user.phoneNumber ? <HomeStack /> : <AuthStack />;
};

export default RootStack;

const styles = StyleSheet.create({});
