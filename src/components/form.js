import React from 'react';

class Form extends React.Component{
    // Siempre que tenga una class React.Component se debe usar el método render
    render(){
        return (
            <div className="col-12">
                <div className="card"> 
                    <form className="card">
                    <div className="card-header">
                        <h2 className="card-title">Formulário</h2>
                    </div>
                    <p className="form-group">
                        <label>Nome</label>
                    <input type="text"/>
                    </p>
                    <p className="form-group">
                    <label>Github</label>
                    <input type="url"/>
                    </p>    
                    <p className="form-group">  
                    <button className="btn btn-primary m-3">Enviar</button>
                    </p>  
                    </form>
                </div>
                {/* props son las propiedades de una clase */}
            </div>
        )
    }
}

export default Form;
