import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
                {/* Switch serve para apresentar uma rota por vez, sem a necessidade de procurar por outras */}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/rooms/new" component={NewRoom} />
					<Route path="/rooms/:id" component={Room} />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
