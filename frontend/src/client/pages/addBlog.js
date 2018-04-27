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

    componentWillMount() {
        if(!this.props.auth.success){
          this.props.history.push('/')
         }
      }

    componentWillReceiveProps(nextProps){
        
       const{createblog,history}=nextProps;
        if(createblog.addblog && createblog.addblog.success){
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
                     value={this.state.title}  
                     onChange={(e)=>this.onChange('title',e.target.value)}
                    />
                
                   <input 
                     type="text"
                     name="subject"
                     className="input-xsmall"
                     placeholder="What's this article about?"
                     value={this.state.subject}
                     onChange={(e)=>this.onChange('subject',e.target.value)}
                    />
                     <textarea  
                     name="article"
                     className="materialize-textarea"
                     placeholder="Write your article (in markdown)"
                     value={this.state.article}
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
  