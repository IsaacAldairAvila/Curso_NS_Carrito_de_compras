import React, { Component } from 'react';
import Button from './Button';

class Product extends Component {
    render() {
        const {producto, AgregarAlCarro} = this.props
        return (
            <div style={styles.product}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => AgregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        );
    }
}


const styles = {
    product:{
        border: '1px solid #eee',
        borderRadius: '10px',
        boxShadow: '0 5px 5px rgb(0,0,0,.1)',
        width: '30%',
        padding: '10px 15px',
        maxWidth: '300px'
    },
    img:{
        width: '100%'
    }
}
export default Product;
