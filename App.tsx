import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/RootStack";
import ContextProvider from "./src/store/context";

export default function App() {
	return (
		<ContextProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</ContextProvider>
	);
}
