import React from 'react';
import {connect} from 'react-redux';
import {getmeta } from '../actions'
import Helmet from "react-helmet";
class Home extends React.Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    //this.props.getmeta('Home');
  }
  

  // head() {
  //   return (
  //     <Helmet>
  //       <title>{`${this.props.admin && this.props.admin.title}`}</title>
  //      </Helmet>
  //   );
  // }
  render(){
   
  return (
  
    <div className="center-align" style={{ marginTop: '200px' }}>
     {/* {this.head()} */}
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </div>
   );
  }
};

function mapStateToProps(state) {
 
  return state
}



export default connect(mapStateToProps,{getmeta})(Home);
