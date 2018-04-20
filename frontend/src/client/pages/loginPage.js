import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';

//import requireAuth from '../components/hocs/requireAuth';

class LoginPage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this._changed = this._changed.bind(this);
    this._login = this._login.bind(this)

  }
  componentDidMount(){
    console.log(this.props)
  }

 componentWillReceiveProps(nextprops){
  const {loginuser,history}= nextprops;
 console.log("1111111111",nextprops)
  if(loginuser.admins.success){
     history.push('/dashboard');
  }
 }

_changed(field, value){
      const next = {
        ...this.state,
        [field]: value
      }
      this.setState(next)
    }

    _login() {   
      this.props.signin(this.state)
   }

  render() {
    return (
             <div className="container">
                <div>
                    <div  style={Style.formstyle}>
                        <label>Email</label>
                        <input type="email"
                          className="input-xsmall"
                          value={this.state.email}
                          onChange={e => this._changed('email', e.target.value)}

                        />
                        <label>Password</label>
                        <input type="password"
                          className="input-xsmall"
                          value={this.state.password}
                          onChange={e => this._changed('password', e.target.value)}

                        />
                        <div>
                        <button onClick = {this._login} className="btn btn-primary" >Login</button>
                        </div>
                    </div>
            </div>
        </div>
    );
  }
}
export const Style = {
  formstyle:{
    marginTop: 80,
    border: "black"
  }

};

function mapStateToProps(state) {
  return { loginuser: state };
}

export default {
  component: connect(mapStateToProps, { signin })(LoginPage)
};
