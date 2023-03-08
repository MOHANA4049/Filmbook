import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  
import './delete.css';
class Remove extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/getvalues')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete('http://127.0.0.1:8080/delete/'+id,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.id}</td>
            <td className="text-left">{Expense.actor}</td>
            <td className="text-left">{Expense.actress}</td>
            <td className="text-left">{Expense.director}</td>
            <td className="text-left">{Expense.moviename}</td>
            <td className="text-left">{Expense.musiby}</td>
            <td><button class="button button8"  onClick={() => this.remove(Expense.id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
             <Link to="/">
            <button class="button button5" style={{padding:20}}>
                 Home
            </button>
            </Link>
        <div class="table-title">
        <h3 align="center">Data Table</h3>
        </div>
        <table  class="table-fill" align="center">
        <thead>
        <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Actor</th>
        <th class="text-left">Actress</th>
        <th class="text-left">Director</th>
        <th class="text-left">Moviename</th>
        <th class="text-left">Musicby</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Remove;