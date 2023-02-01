// import React from 'react';
import './App.css';
// import CounterProvider from './Components/CounterProvider/CounterProvider';
// import CountOne from './Components/CountOne/CountOne';
import ProductProvider from './Components/ProductProvider/ProductProvider';
import ProductList from './Components/ProductList/ProductList';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';

function App() {


  return (

    // <CounterProvider>
    //   <CountOne />
    // </CounterProvider>
    <section className='app-Container'>
      <ProductProvider>
        <FilteredProducts />
        <ProductList />
      </ProductProvider>
    </section>
  );
}

export default App;
