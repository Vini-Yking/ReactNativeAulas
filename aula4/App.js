import { StatusBar } from "react-native";
import React from "react";
import Routes from './src/Routes';
import AuthProvider from "./src/context/AuthContext";
import LoginProvider from "./src/context/LoginContext";

export default function App() {
  return (
    <AuthProvider>
      <LoginProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
      </LoginProvider>
    </AuthProvider>
  )
}