import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import loadable from '@loadable/component'

const AuthRouter = loadable(() => import('./Modules/Auth/Auth.router'));
const HomeRouter = loadable(() => import('./Modules/Home/Home.router'));
const BoardRouter = loadable(() => import('./Modules/Board/Board.router'));

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/">
                    <HomeRouter/>
                </Route>
                <Route
                    path="/auth">
                    <AuthRouter/>
                </Route>
                <Route
                    path="/board">
                    <BoardRouter/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;