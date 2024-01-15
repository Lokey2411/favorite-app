import { PropsWithChildren, createContext, useState } from "react";
import { UserType } from "../../types/user";

type ContextType = {
	user: UserType;
	setUser: (user: UserType) => void;
	favoriteList: string[];
	addFavoriteList: (id: string) => void;
	removeFavoriteList: (id: string) => void;
};

export const UserContext = createContext<ContextType>({
	user: {
		username: "",
		password: "",
		phoneNumber: "",
	},
	setUser: (user: any) => {},
	favoriteList: [],
	addFavoriteList: (id: string) => {},
	removeFavoriteList: (id: string) => {},
});
const ContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<UserType>({
		username: "",
		password: "",
		phoneNumber: "",
	});
	const [favoriteList, setFavoriteList] = useState<string[]>([]);
	const addFavoriteList = (id: string) => {
		setFavoriteList((prevState) => [...prevState, id]);
	};
	const removeFavoriteList = (id: String) => {
		setFavoriteList((prevState) => prevState.filter((favId) => favId !== id));
	};
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				favoriteList,
				addFavoriteList,
				removeFavoriteList,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default ContextProvider;
