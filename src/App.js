import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
