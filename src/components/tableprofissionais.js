import React from 'react';

export default class TableProfissionais extends React.Component{
    // Siempre que tenga una class React.Component se debe usar el método render
    render(){
        console.log("PROPS:", this.props);
        return (
            <table className="table m-5 mb-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dados.map((profissional) => {
                        return (
                            <tr key={profissional.id}>
                            <td>
                            {profissional.nome}
                            </td> 
                            <td>
                            <a href="{profissional.github}">Github do {profissional.nome}</a>
                            </td>
                    </tr>
                        )
                    })}
                    
                </tbody>    
            </table>
        )
    }
}

