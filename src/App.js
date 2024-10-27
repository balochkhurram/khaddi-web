
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import Navbar1 from './components/navbar/Navbar1';
import Sale from './pages/Sale';
import { Route, Routes } from 'react-router-dom';
import Fabrics from './pages/Fabrics'
import ProductUiDesc from './components/productuidesc/ProductUiDesc';
import NewIn from './pages/NewIn';
import Section2 from './components/section/Section2';
import Searchbar from './components/navbar/Searchbar';

function App() {
  return (
    <>

      <Header />
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home />} ></Route>

        <Route path='/:collection' element={<Fabrics />}></Route>
        <Route path='/:collection/:type' element={<Fabrics />}></Route>
        <Route path='/:collection/:type/:category' element={<Fabrics />}></Route>
        <Route path='/:salePrice' element={<Sale/>} ></Route>
        <Route path='/:newArrival' element={<NewIn/>} ></Route>
       <Route path='/:collection/:type/:category/:sku' element={<ProductUiDesc/>}  ></Route>
     
      </Routes>

      <Footer />

       
     


    </>

  );
}

export default App;
