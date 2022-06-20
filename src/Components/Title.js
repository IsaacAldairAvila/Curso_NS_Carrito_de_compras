import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Lista de productos</h1>
        )
    }
}

const styles = {
    title:{
        marginBottom: '30px'
    }
}