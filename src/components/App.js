import React from 'react';
import Layout from './Layout';
import PhoneBookPage from '../pages/PhoneBookPage';
import ThemeContext from '../context/Theme';

const App = () => (
  <ThemeContext>
    <Layout>
      <PhoneBookPage />
    </Layout>
  </ThemeContext>
);
export default App;
