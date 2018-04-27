import React from 'react';
import App from './App';
import HomePage from './pages/homePage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './pages/dashboardpage';
import AddBlog from './pages/addBlog';
import EditBlog from './pages/editBlog';


export default [
  {
    ...App,
    
    routes: [
      {
       ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...RegisterPage,
        path: '/register'
      },
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...Dashboard,
        path: '/dashboard'
      },
      {
        ...AddBlog,
        path: '/addblog'
      },
      {
        ...EditBlog,
         path:"/editblog",
      
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
