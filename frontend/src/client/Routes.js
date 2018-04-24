import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './pages/dashboardpage';


export default [
  {
    ...App,
    routes: [
      {
        component:HomePage,
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
        ...NotFoundPage
      }
    ]
  }
];
