import { Layout } from "antd";
import React, { useEffect } from "react";
import "./App.css";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";
import { useActions } from "./Hooks/useActions";
import { IUser } from "./Models/IUser";

function App() {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setUser({username: localStorage.getItem('username' ||  '')} as IUser);
      setIsAuth(true);
    }
  })

  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
