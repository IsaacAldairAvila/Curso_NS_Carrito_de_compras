import { Component } from 'react'
import Producto from './Components/Producto';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Navbar from './Components/Navbar'
class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 150, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 150, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 150, img: '/productos/lechuga.jpg' }
    ]
  }
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Producto
            agregarAlCarro={() => console.log(`hola`)}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
