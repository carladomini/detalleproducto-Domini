import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import imagen from './components/images/fondo.png'

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
     <NavBar/>
     <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
      </div> 
     <ItemDetailContainer/>
     <Productos/>

    </div>
  );
}

export default App;
