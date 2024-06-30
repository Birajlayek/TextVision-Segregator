// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VendorList from './components/VendorList';
import VendorForm from './components/VendorForm';
import EditVendorForm from './components/EditVendorForm';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/vendors" exact component={VendorList} />
                <Route path="/vendors/new" component={VendorForm} />
                <Route path="/vendors/:id/edit" component={EditVendorForm} />
            </Switch>
        </Router>
    );
}

export default App;
