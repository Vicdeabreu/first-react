import React from 'react';

class Form extends React.Component{
    // Siempre que tenga una class React.Component se debe usar el método render
    render(){
        return (
            <div>
                <form class="card">
                <div class="card-header">
                    <h2 class="card-title">Formulário</h2>
                </div>
                <p class="form-group">
                    <label>Nome</label> 
                  <input type="text"/>
                </p>
                <p class="form-group">
                  <label>Github</label>
                  <input type="url"/>
                </p>
                <p class="form-group">  
                  <button class="btn btn-primary">Enviar</button>
                </p>  
                </form>
                {/* props son las propiedades de una clase */}
            </div>
        )
    }
}

export default Form;
