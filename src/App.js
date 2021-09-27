import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
