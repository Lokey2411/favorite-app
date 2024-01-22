import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../../controller/storage.controller";

const initialState: UserType = {
	username: (getUser() as any).username,
	password: "",
	phoneNumber: (getUser() as any).phoneNumber,
};

const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state: UserType, action: PayloadAction<UserType>) => {
			return action.payload;
		},
	},
});
// addFavorite("1");// useState bình thường
// dispatch(setUser("1")); // redux
export const userReducer = user.reducer;
export const { setUser } = user.actions;
// export const addFavorite = favorite.actions.addFavorite;
// export const removeFavorite = favorite.actions.removeFavorite;
