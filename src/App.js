import React from 'react'
import "./App.css";
import {AppProvider} from './providers/app.Provider';
import Home from './components/Home/Home'
function App() {
  return (
    <AppProvider>
        <Home/>
    </AppProvider>
 
  );
}

export default App;
