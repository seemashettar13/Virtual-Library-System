
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the store
import App from "./App"; // Main App component

// Render the application, wrapping it with the Redux Provider
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        {" "}
        <App />
    </Provider>
);

