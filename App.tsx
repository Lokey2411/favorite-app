import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/RootStack";
import ContextProvider from "./src/store/context";
import { Provider } from "react-redux";
import store from "./src/store/redux";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</Provider>
	);
}
