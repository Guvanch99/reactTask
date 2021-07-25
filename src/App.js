import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home,Error,Registration} from './pages'
import './styles/style.scss'

const App = () => {
    return (
        <div className='container'>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/registration' component={Registration}/>
                <Route path='*' component={Error}/>
            </Switch>
        </Router>
        </div>

    );
};

export default App;