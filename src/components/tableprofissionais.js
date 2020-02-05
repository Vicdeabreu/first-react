import React from 'react';

export default class TableProfissionais extends React.Component{
    // Siempre que tenga una class React.Component se debe usar el método render
    render(){
        console.log("PROPS:", this.props);
        return (
            <div>
                <h2>Eu so uma tabela</h2>
                <h2>{this.props.profissionais[0].nome}</h2>
                <h2>{this.props.profissionais[0].github}</h2>
                {/* props son las propiedades de una clase */}
            </div>
        )
    }
}

