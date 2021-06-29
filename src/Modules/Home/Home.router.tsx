import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import loadable from '@loadable/component'

const HomePage = loadable(() => import('./Pages/Home.page'));

const HomeRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default HomeRouter;