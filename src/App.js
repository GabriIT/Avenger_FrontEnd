import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import DashBorad from './page/DashBoard/DashBoard';
import List from './page/List/List';
import NotFound from './page/NotFound/NotFound';

const App = (props) => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#E5EDF5', border: '1px solid #C9C1D5', height: '50px', marginBottom: '20px' }}>
                <button
                    style={{ float: 'right', height: '45px', padding: '5px', marginRight: '10px', backgroundColor: '#8888', width: '120px' }}
                    onClick={() => { history.push('/list') }}>List</button>
                <button
                    style={{ float: 'right', height: '45px', padding: '5px', marginRight: '10px', backgroundColor: '#8888', width: '120px' }}
                    onClick={() => { history.push('/') }}>Back</button>
            </div>
            <Router history={history}>
                <Switch>
                    <Route exact path='/list' component={List} />
                    <Route exact path='/' component={DashBorad} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default App;