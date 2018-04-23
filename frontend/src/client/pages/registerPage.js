import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions';

class RegisterPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      };

      this._changed = this._changed.bind(this)
      this._register = this._register.bind(this)
    }

    componentDidMount(){
    }

    componentWillReceiveProps(nextprops){
     const {user,history}=nextprops;
     if(user.admin.success){
      history.push('/login');
     }
    }

    _changed(field, value){
      const next = {
        ...this.state,
        [field]: value
      }
      this.setState(next)
    }

  _register() {
    
     this.props.registerUser(this.state)
  }

  render() {
    return (
             <div className="container">
                <div>
                    <div style={Style.formstyle}>
                        <label>First Name</label>
                        <input type="text"
                          className="input-xsmall"
                          value={this.state.firstname}
                          onChange={e => this._changed('firstname', e.target.value)}

                        />
                        <label>Last Name</label>
                        <input type="text"
                          className="input-xsmall"
                          value={this.state.lastname}
                          onChange={e => this._changed('lastname', e.target.value)}

                        />
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
                           <button onClick = {this._register} className="btn btn-primary" >Create Account</button>
                        </div>
                    </div>
            </div>
        </div>
    );
  }
}
export const Style = {
  formstyle:{
    marginTop: 30,
    border: "black"
  }

};



function mapStateToProps(state) {
  return { user: state };
}



export default {
  component: connect(mapStateToProps, { registerUser })(RegisterPage)
};
