import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutuser,fetchCurrentUser } from '../actions'



import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends React.Component{
 
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this)
   
  }

componentWillReceiveProps(nextProps){

  const {auth,history,admin,props} = nextProps;
 
  if(admin && admin.logout && admin.logout.success){
     location.replace('/')
  }
}  

  logout(){
    this.props.logoutuser(cookies.get('token'));
    cookies.remove('token')
    
  }

  

  render(){
   
     const {admin,auth} = this.props;
    
    return (
      
        <nav>
          <div className="nav-wrapper" style={Style.formstyle}>
            <Link to="/" className="brand-logo">
              Article
            </Link>
            <ul className="right">
            {
              !auth.success && 
              <li>
                <Link to="/register">Register</Link>
              </li>
            }
             { !auth.success && <li><Link to="/login">Login</Link></li>}
             { auth.success && <li><a onClick={this.logout}>Logout</a></li>}
            </ul>
          </div>
        </nav>
    )
  }
 
} 

function mapStateToProps(state) {
  
  return state
}
export const Style = {
  formstyle:{
    marginLeft: 10
  }

};


export default connect(mapStateToProps,{logoutuser})(Header)
