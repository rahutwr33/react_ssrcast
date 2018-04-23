import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutuser } from '../actions'
var Route = require('react-router-dom').Route
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends React.Component{

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this)
  }

  componentDidMount(){
  console.log(this.props)
  }

componentWillReceiveProps(nextProps){
 
  const {admin,history} = nextProps;
  if(admin.success){
   // history.push('/');
  }
}  

  logout(){
    this.props.logoutuser(cookies.get('token'));
    cookies.remove('token')
    
  }

  render(){
    const {auth} = this.props;

    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Sports System
            </Link>
            <ul className="right">
            {
              !auth && 
              <li>
                <Link to="/register">Register</Link>
              </li>
            }
             { !auth && <li><a href="/login">Login</a></li>}
             { auth && <li><a onClick={this.logout}>Logout</a></li>}
            </ul>
          </div>
        </nav>
    )
  }
 
} 

function mapStateToProps(state) {
  
  return state
}



export default connect(mapStateToProps,{logoutuser})(Header);
