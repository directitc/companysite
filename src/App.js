import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
