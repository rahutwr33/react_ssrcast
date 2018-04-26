import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getmeta,getblog } from '../actions'
import Helmet from "react-helmet";
import Blogdialog from './blogDialog'
import {Link,Redirect} from 'react-router-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
    
    }
    this.addBlog=this.addBlog.bind(this)
  }

  componentWillMount() {
    this.props.getblog()
  }
  addBlog(){
  const {history}=this.props;
  
   history.push('/addblog')
 
  }

  render(){
    const {blog}= this.props;
    
    const styles = {
      buttonStyle:{

        },
        dialogStyle:{
          height: 400
        }
    };
    const muiTheme = getMuiTheme({
     
    }, {
      avatar: {
        borderColor: null,
      },
      userAgent:'all'
    });
    
  return (
    <div className="left-align" style={{ margin:'50px' }}>
    <Helmet>
        <title>{`${this.props.meta.title}`}</title>
        <meta name="description" content={`${this.props.meta.description}`}/>
    </Helmet>
    <div>
       <MuiThemeProvider muiTheme={muiTheme}>
       <FloatingActionButton>
          <ContentAdd title="Add Blog" onClick={this.addBlog}/>
        </FloatingActionButton>
       </MuiThemeProvider>
       </div> 
       <div >
       { this.props.blog && 
         blog.data.map(data=>{
           return(
             <div >
                <div className="row">
                <div className="col s12 m6">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title" key={data._id}>{data.title}</span>
                      <p  key={data.title}>{data.article}</p>
                    </div>
                    <div className="card-action">
                      <a href="#">Edit</a>
                      <a href="#">Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           )
         })
       }
       </div>
    </div>
  );
 }
};

function mapStateToProps(state) {
 
  return state
}


function loadData(store) {
  return store.dispatch(getmeta('Dashboard'));
}

export default {
  loadData,
 component: connect(mapStateToProps, { getmeta,getblog})
  (Dashboard)
 
};

