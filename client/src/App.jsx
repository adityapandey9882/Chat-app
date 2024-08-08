import React, { Children, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Chat from "./pages/chat";
import Profile from "./pages/profile";
import { useAppStore } from "./store";
import { useState, useEffect } from "react";

const PrivateRoute = ({children})=>{
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children : <Navigate to ="/auth"/>;
};

const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? <Navigate to="/chat" /> : children;
};

const App = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const getUserData = async () => {

    }
    if(!userInfo) {
      getUserData();
    }else {
      
    }
  }, [userInfo,setUserInfo])

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/auth" 
          element={
            <AuthRoute>
              <Auth/>
            </AuthRoute>
          }
        />
        <Route 
          path="/chat" 
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
          />
        <Route 
        path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>}/>
        <Route path="*" element={<Navigate to="/auth" />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App