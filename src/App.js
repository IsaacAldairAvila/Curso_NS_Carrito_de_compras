import { Component } from 'react'
import Producto from './Components/Producto';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Navbar from './Components/Navbar'
import tomate from './img/productos/tomate.jpg'
import lechuga from './img/productos/lechuga.jpg'
import arbejas from './img/productos/arbejas.jpg'
class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 150, img: tomate },
      { name: 'Arbejas', price: 150, img: arbejas },
      { name: 'Lechuga', price: 150, img: lechuga }
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
