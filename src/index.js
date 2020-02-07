import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Post from './components/post';
import App from './components/app';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (   <div className="content"> 
            <div className="card">
                <div className="card-lg"> 
                <App/>
                </div>
            </div>
        </div>
    ),
document.getElementById('root')
);