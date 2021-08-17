/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import TeachrBackend from './components/TeachrBackend';
import TeachrFavorites from './components/TeachrFavorites.js';
import Router from './navigation/Router';


const App: () => Node = () => {

  const [teachr, setTeachr] = useState([])

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/teachrs?page=1")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTeachr(data);
  //       console.warn(teachr)
  //     })
  //     .catch(function (error) {
  //       console.log('There has been a problem with your fetch operation: ' + error.message);
  //       // ADD THIS THROW error
  //       throw error;
  //     });
  // }, []);

  return (
    <Router />
  );
};


export default App;
