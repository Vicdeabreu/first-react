import React from 'react';

class Post extends React.Component{
    // Siempre que tenga una class React.Component se debe usar el método render
    render(){
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
                {/* props son las propiedades de una clase */}
            </div>
        )
    }
}

export default Post;
