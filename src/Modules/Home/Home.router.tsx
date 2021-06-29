import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./Pages/Home.page";



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