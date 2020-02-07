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
                id: 1,
                nome: "Wagner Venceslau",
                github: "http://github.io/wagven"
                },
                {
                id: 2,
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
                <h1>Lista de profissionais</h1>
                <Form/>
                <TableProfissionais dados={this.state.profissionais}/>
            </div>
        )
    }
}


export default App