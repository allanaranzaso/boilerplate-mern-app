import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Routing from './components/routes/Routing';


function App() {
  return (
    <div className="mx-auto min-h-screen">
      <Navbar />
      <Routing />
      
      <Footer />
    </div>
  );
}

export default App;
