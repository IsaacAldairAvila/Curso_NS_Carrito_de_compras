import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button {...this.props}style={styles.button} />
        )
    }
}

const styles = {
    button:{
        backgroundColor: '#0A283E',
        color: '#FFF',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor:'pointer',
    }
}