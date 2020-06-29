import React, {Fragment} from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRooms';
import Error from './pages/Error';



function App() {
  return (
    <>
      <Home />
      <SingleRooms />
      <Rooms />
      <Error />
      
    </>
  );
}

export default App;
