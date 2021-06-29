import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BoardPage from "./Pages/board.page";

const BoardRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/">
                    <BoardPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default BoardRouter;