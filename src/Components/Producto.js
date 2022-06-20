import React, { Component } from 'react';
import Product from './Product'
class Producto extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        return (
            <div style={styles.productos}>
                {
                    productos.map(
                        (x) => <Product
                            agregarAlCarro={agregarAlCarro}
                            key={x.name}
                            producto={x}
                        />
                    )
                }
            </div>
        );
    }
} const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

export default Producto;