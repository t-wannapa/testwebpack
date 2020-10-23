import React from "react";
import ReactDOM from 'react-dom'
import App from "./containers/App";

const AppWithRouter = () => {
    return (
        <App/>
    );
}


ReactDOM.render(<AppWithRouter/>, document.getElementById('root'))
