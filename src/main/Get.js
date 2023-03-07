import axios from "axios";
import React,{Component} from "react";
import './get.css';
class GetValues extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/getvalues').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1} align="center" className="g">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Actor</th>
                        <th>Actress</th>
                        <th>Director</th>
                        <th>MovieName</th>
                        <th>MusicBy</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.actor}</td>
                            <td>{user.actress}</td>
                            <td>{user.director}</td>
                            <td>{user.moviename}</td>
                            <td>{user.musiby}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default GetValues;