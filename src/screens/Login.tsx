import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { STYLES } from "../styles";
import { UserContext } from "../store/context";
import { useAppDispatch } from "../store/redux";
import { setUser } from "../store/redux/user.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
	const dispatch = useAppDispatch();
	const [formState, setFormState] = useState({
		phoneNumber: "",
		password: "",
	});
	const updateFormState = (key: string, value: string) => {
		setFormState((prevState) => ({ ...prevState, [key]: value }));
	};
	const logInHandler = async () => {
		dispatch(setUser({ ...formState, username: "" }));
		//update to async storage
		//setItem
		// getItem
		// clear
		// removeItem
		await AsyncStorage.setItem("token", JSON.stringify(formState)).catch(console.log);
		console.log(JSON.parse((await AsyncStorage.getItem("token")) as any));
	};
	return (
		<View style={STYLES.container}>
			<View style={STYLES.content}>
				<TextInput
					placeholder="phone number"
					style={{
						backgroundColor: "lightgrey",
						padding: 12,
						marginVertical: 24,
						width: "100%",
					}}
					onChangeText={(value) => updateFormState("phoneNumber", value)}
					value={formState.phoneNumber}
				/>
				<TextInput
					placeholder="password"
					style={{
						backgroundColor: "lightgrey",
						padding: 12,
						width: "100%",
					}}
					onChangeText={(value) => updateFormState("password", value)}
					value={formState.password}
				/>
				<TouchableOpacity
					style={{
						backgroundColor: "lightgrey",
						padding: 12,
						width: "100%",
						marginVertical: 24,
					}}
					onPress={logInHandler}
				>
					<Text style={{ textAlign: "center" }}>Đăng nhập</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
