import React, { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Loader from 'Loader/Loader';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{ backgroundColor: '#030308', minHeight: '100vh', color: 'white' }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Header />
          <Main />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
