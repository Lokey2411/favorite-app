import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const favorite = createSlice({
	name: "favorite",
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<string>) => {
			// setState(prevState=>,,,)
			return [...state, action.payload];
		},
		removeFavorite: (state, action: PayloadAction<string>) => {
			return state.filter((favId) => favId !== action.payload);
		},
	},
});
// addFavorite("1");// useState bình thường
// dispatch(addFavorite("1")); // redux
export const favoriteReducer = favorite.reducer;
export const { addFavorite, removeFavorite } = favorite.actions;
// export const addFavorite = favorite.actions.addFavorite;
// export const removeFavorite = favorite.actions.removeFavorite;
