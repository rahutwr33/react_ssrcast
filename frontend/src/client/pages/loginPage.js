import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin ,getmeta} from '../actions';
import Helmet from "react-helmet";
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
    this.props.getmeta('Login');
  }

 componentWillReceiveProps(nextprops){
  
  const {admin,history}= nextprops;
  if(admin!=null){
     //history.push('/dashboard');
     location.replace('/dashboard')
  }
 }

 head() {
  
  return (
    <Helmet>
      <title>{`${this.props.meta.title}`}</title>
      <meta name="description" content={`${this.props.meta.description}`}/>
     </Helmet>
  );
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
              {this.head()}
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

  return state
}

function loadData(store) {
  return store.dispatch(getmeta('Login'));
}


export default {
   loadData,
  component: connect(mapStateToProps, { signin ,getmeta})
   (LoginPage)
  
};
