import React from "react"
import Login from "../containers/Login/Login";

const Routes = {
    Login: "/login",
}

const PublicRoutes = () => {
    <Switch>
        <Route exact path={Routes.Login} component={Login} />
    </Switch>
}


export { Routes, PublicRoutes }
