import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getmeta } from '../actions'
import Helmet from "react-helmet";
class HomePage  extends Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    this.props.getmeta('Home');
    const {auth,history}=this.props;
    if(auth.success){
      history.push('/dashboard')
    }
  }
  

  head() {
   
    return (
      <Helmet>
           <title>{`${this.props.meta.data.length>0 ? this.props.meta.title : 'Hompage'}`}</title>
         <meta name="description" content={`${this.props.meta.data.length>0 ? this.props.meta.description : 'universal react'}`}/>
       </Helmet>
    );
  }
  render(){
   
  return (
  
    <div className="center-align" style={{ marginTop: '200px' }}>
     {this.head()}
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
   );
  }
};

function mapStateToProps(state) {
 
  return state
}

function loadData(store) {
  return store.dispatch(getmeta('Home'));
}



export default {
  loadData,
 component: connect(mapStateToProps, { getmeta})
  (HomePage)
 
};
