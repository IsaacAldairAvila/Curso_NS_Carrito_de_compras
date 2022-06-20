import React, { Component } from 'react'
import Logo from './Logo'

export default class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <Logo />
                <p>carro</p>
            </nav>
        )
    }
}


const styles ={
    navbar:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: '100px',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}