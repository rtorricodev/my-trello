import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import loadable from '@loadable/component'

const LoginPage = loadable( () => import('./Pages/Login.page'));
const SiginPage = loadable( () => import('./Pages/Sigin.page'));


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