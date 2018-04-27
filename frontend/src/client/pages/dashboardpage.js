import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getmeta,getblog ,deleteblog} from '../actions'
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
     currentpage:1,
     paginateKey:1
    }
    this.addBlog=this.addBlog.bind(this);
   
  }

  componentWillMount() {
    if(!this.props.auth.success){
      this.props.history.push('/')
     }
  }
  
  componentDidMount() { 
   
    this.props.getblog(this.state.currentpage);
  
  }
 
  componentWillReceiveProps(nextProps){
   
     if(nextProps.deleteblogreducer && nextProps.deleteblogreducer.deleteblog.success){
      this.props.getblog(this.state.currentpage);
      
     }
  }


  addBlog(){
  const {history}=this.props;
   history.push('/addblog')
  }

  deleteBlog(ID){
    this.props.deleteblog(ID);
  }

  head(){
    return (
      <Helmet>
         <title>{`${this.props.meta.title}`}</title>
         <meta name="description" content={`${this.props.meta.description}`}/>
      </Helmet>
    );
  }

  getPaginateBlogData(page){
    this.setState({paginateKey:page})
    this.props.getblog(page);
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

    const pageNumbers = [];
    if(blog){
      for (let i = 1; i <=blog.getblog.total; i++) {
        pageNumbers.push(i);
      }
    }
    
  
   
  return (
    <div>
          {this.head()}
       <div  className="left-align" style={{ margin:'50px' }}>
       <MuiThemeProvider muiTheme={muiTheme}>
       <FloatingActionButton onClick={this.addBlog}>
          <ContentAdd title="Add Blog" />
        </FloatingActionButton>
       </MuiThemeProvider>
       </div> 
      
       <div style={{marginLeft:300}}>
       { this.props.blog && 
         blog.getblog.data.map(data=>{
           return(
             <div  key={data._id}>
                <div className="row">
                <div className="col s12 m8">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="center card-title" key={data._id}>{data.title}</span>
                      <p  key={data.title}>{data.article}</p>
                    </div>
                    <div className="card-action">
                      <Link  to={'/editblog?id='+data._id} >Edit</Link>
                      <a onClick={this.deleteBlog.bind(this,data._id)}>Delete</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           )
         })
       }
      </div>
      <div>
      <ul className="pagination center">
          {
            pageNumbers.map(i=>{
             return  <li key={i} className={"center "+(this.state.paginateKey==i? 'active':'')}><a onClick={this.getPaginateBlogData.bind(this,i)}>{i}</a></li>;
            })
          }
      </ul>
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
 component: connect(mapStateToProps, { getmeta,getblog,deleteblog})
  (Dashboard)
 
};

