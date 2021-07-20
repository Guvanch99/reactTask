import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Home} from './pages'
import './styles/style.scss'

const App = () => {
    return (
        <div className='container'>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
  
            </Switch>
        </Router>
        </div>

    );
};

export default App;