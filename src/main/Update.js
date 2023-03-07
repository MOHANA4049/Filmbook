import axios from "axios";
import React, { Component } from "react";
import './update.css';
class UpdateValues extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            actor:" ",
            actress:" ",
            director:" ",
            moviename:" ",
            musiby:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handleActorChange = (event) => {
    this.setState({ actor:event.target.value});
}
handleActressChange = (event) => {
    this.setState({ actress:event.target.value});
}
handleDirectorChange = (event) => {
    this.setState({ director:event.target.value});
}
handleMovienameChange = (event) => {
    this.setState({ moviename:event.target.value});
}
handleMusibyChange = (event) => {
    this.setState({ musiby:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        actor:this.state.actor,
        actress:this.state.actress,
        director:this.state.director,
        moviename:this.state.moviename,
        musiby:this.state.musiby        
    }
    axios.put('http://127.0.0.1:8080/update',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="ge" align="center">
            <label className="login-label">Id</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>

            <label className="login-label">Actor</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.actor}
                onChange ={this.handleActorChange}
            /><br/><br/>

            <label className="login-label">Actress</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.actress}
                onChange ={this.handleActressChange}
            /><br/><br/>

            <label className="login-label">Director</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.director}
                onChange ={this.handleDirectorChange}
            /><br/><br/>

            <label className="login-label">Moviename</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.moviename}
                onChange ={this.handleMovienameChange}
            /><br/><br/>
             <label className="login-label">MusicBy</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.musiby}
                onChange ={this.handleMusibyChange}
            /><br/><br/>
            <button className="login-button" type="submit" style={{padding:10,color:"blue"}}> Submit </button>
        </form>
    );
  }
}

export default UpdateValues;