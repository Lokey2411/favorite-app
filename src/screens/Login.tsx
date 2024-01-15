import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { STYLES } from "../styles";
import { UserContext } from "../store/context";

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [formState, setFormState] = useState({
		phoneNumber: "",
		password: "",
	});
	const updateFormState = (key: string, value: string) => {
		setFormState((prevState) => ({ ...prevState, [key]: value }));
	};
	const logInHandler = () => {
		setUser({ ...user, ...formState });
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
