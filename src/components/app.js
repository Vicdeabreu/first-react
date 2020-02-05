import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TableProfissionais from './tableprofissionais';
import Form from './form';

// import * as serviceWorker from './serviceWorker';

class App extends React.Component {

        constructor(props) {
            super(props)
    
            this.state = {
                profissionais: [
                {
                nome: "Wagner Venceslau",
                github: "http://github.io/wagven"
                },
                {
                nome: "Eduardo Rocha",
                github: "http://github.io/eduroc"
                }
            ]
            }
        }

    render(){
        console.log("STATE:", this.state);
        return (
            <div>
                <h1>Hello World</h1>
                <TableProfissionais/>
                <Form/>
                <TableProfissionais profissionais={this.state.profissionais}/>
            </div>
            
        )
    }
}


export default App