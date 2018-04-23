import React,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './pages/Header';
import { fetchCurrentUser } from './actions';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import route from './Routes'
const App =({route})=>{
  
 
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
 
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser(cookies.get('token')))
};
