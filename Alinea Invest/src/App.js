import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

// Load Components
import Navbar from "./components/Navbar";

// Load pages

import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={HomePage} />
				<Redirect to="/authentication" />
			</Switch>
		</div>
	);
}

export default App;
