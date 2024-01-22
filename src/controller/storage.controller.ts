import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
	Promise.all([]);
	return JSON.parse((await AsyncStorage.getItem("token")) as any);
};
