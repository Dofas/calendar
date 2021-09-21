import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppRouter from './Components/AppRouter';
import NavBar from './Components/NavBar';


function App() {
  return (
    <Layout>
      <NavBar />
      <Layout.Content >
       <AppRouter />
      </Layout.Content>
   </Layout>
  );
}

export default App;
