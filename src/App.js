import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Home} from './pages'
import './styles/style.scss'
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
  
            </Switch>
        </Router>

    );
};

export default App;