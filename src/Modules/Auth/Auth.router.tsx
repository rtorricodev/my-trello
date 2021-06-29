import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginPage from "./Pages/Login.page";
import SiginPage from "./Pages/Sigin.page";


const AuthRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/">
                    <LoginPage/>
                </Route>
                <Route
                    path="/sigin">
                    <SiginPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AuthRouter;