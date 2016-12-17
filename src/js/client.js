import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

class DummyComponent extends React.Component
{
    render()
    {   
        return(<h1>I am sooooo dumb!!!</h1>);
    }    
}

const app = document.getElementById('app');
ReactDOM.render(<DummyComponent/>, app);


