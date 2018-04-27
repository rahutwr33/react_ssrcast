import React,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './pages/Header';
import { connect } from 'react-redux';
import { fetchCurrentUser } from './actions';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends Component{
  constructor(props){
    super(props); 
  }
 
  

  render(){
  
  return (
    <div>
      <Header props={this.props}/>
      {renderRoutes(this.props.route.routes)}
    </div>
  );
 }
};
function mapStateToProps(state) {
 
  return state
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser(cookies.get('token'))),
  component: connect(mapStateToProps)(App)
};