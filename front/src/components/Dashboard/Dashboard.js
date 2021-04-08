import React,{ Component } from 'react'
import Axios from 'axios'
import {Link , Router,BrowserRouter , Route ,Switch} from 'react-router-dom'


class DashBoard extends Component {
  state = {
    posts : [ ]
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res);
      this.setState({
        id: this.state.id ,
        posts: res.data.slice(0,6)
      })
        }) 
  }
  render(){
const {posts} = this.state; //probs
const postList =posts.length ? (
  posts.map(post => {
    return (
        
      <div className="post card" key={post.id}>
    
<div className="card-content"> 
 

   
  <p>{post.body}</p>
</div>
      </div>
    )

  })
) : (
  <div className="center">I'm here</div>
)

    return(
      <div className="container home">
   
   {postList}
</div>
)
  }
  
    
 
}

export default DashBoard