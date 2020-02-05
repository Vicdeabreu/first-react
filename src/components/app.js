import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TableProfissionais from './tableprofissionais';
import Form from './form';

// import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <TableProfissionais/>
                <Form/>
            </div>
        )
    }
}

export default App