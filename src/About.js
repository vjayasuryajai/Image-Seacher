import React from 'react';


class About extends React.Component{
  
    constructor(){
      
      super();
      
  this.state ={

    isLoading: true,
    users: [],
    error: null,
ImagesName  : "" ,
 key : "acRYcGl9GKn2ww6vLlVu33lyfkB5ZvxjcRBJ4J65Ijg",
  Sceret : "JS_sSHaKh0hRkEmgmhbdyz5ITzFCh5PYM0FqrmP_2H8"
  
  }
  
  
    }
    

   

    
    onclick = (e) => {
      // console.log(this.state.ImagesName)
        // Where we're fetching data from
      fetch(`https://api.unsplash.com/search/photos?client_id=${this.state.key}&query=${this.state.ImagesName}`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data => {
            // console.log(data.results)
            this.setState({
              users: data.results,
              isLoading: false,
            })
          } )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
  
          

  

  }

 

    
    
    render(){
      
      const { isLoading, users, error } = this.state;
      return (
      <div>
   <input type ="text" value ={this.state.ImagesName} onChange ={ (e)=> {this.setState({ImagesName : e.target.value})}} />
   <input type ="submit" value = "submit" onClick = {this.onclick} />
      
   {error ? <p>{error.message}</p> : null}

   {!isLoading  ? (
     users.map (images => {
//console.log(images.urls.full)
return(
    
  <div key= {images.id}>
    <img src= {images.urls.full}   alt ={images} hieght="300px" width="300px"/>
    <p></p>
    </div>
)
     })



   ) : 
   
   null }

 </div>
      );
    }
    
  }
  
  
  export default About;
  