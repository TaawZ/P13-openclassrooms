import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import "../css/app.css";

function Router() {
	return (
		<div className="App">
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export default Router;
