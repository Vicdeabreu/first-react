import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Post from './components/post';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (   <div className="content"> 
            <div className="card">
                <div className="card-lg"> 
                <h1 className="card-title">Hello World!</h1>
                <Post texto="Olá Mundo" titulo="Primeiro"/>
                <Post texto="Eu sou um segundo Post" titulo="Segundo"/>
                <Post texto="Sou o último post" titulo="Terceiro"/>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                </div>
            </div>
        </div>
    ),
document.getElementById('root')
);