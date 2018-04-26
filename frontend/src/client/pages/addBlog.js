import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addblog} from '../actions'
class AddBlog extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            subject:"",
            article:""
        }
        this.addArticle=this.addArticle.bind(this)
    }

    componentWillReceiveProps(nextProps){
        const{blog,history}=nextProps;
        if(blog.success){
            history.push('/dashboard')
        }
    }

    onChange(field, value){
      
        const next = {
            ...this.state,
            [field]: value
          }
         
          this.setState(next)
       
    }

    addArticle(){
      this.props.addblog(this.state)
    }
    render(){
        return (
            <div className="container">
               <div  style={Style.formstyle}>
               
                   <input 
                     type="text"
                     name="title"
                     className="input-xsmall"
                     placeholder="Title"    
                     onChange={(e)=>this.onChange('title',e.target.value)}
                    />
                
                   <input 
                     type="text"
                     name="subject"
                     className="input-xsmall"
                     placeholder="What's this article about?"
                     onChange={(e)=>this.onChange('subject',e.target.value)}
                    />
                     <textarea  
                     name="article"
                     className="materialize-textarea"
                     placeholder="Write your article (in markdown)"
                     onChange={(e)=>this.onChange('article',e.target.value)}
                     ></textarea>
                     <a className="waves-effect waves-light btn" onClick={this.addArticle}>Publish Article</a>
                </div>
            </div>
        )
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
  
  
  export default {
   component: connect(mapStateToProps,{addblog})
    (AddBlog)
   
  };
  