import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards'
import axios from 'axios';

class Tasks extends Component{

    state={
        taskData:[]
    };
    componentDidMount(){
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks",
        {headers:{
            "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc1NDMsImV4cCI6MTU4Mjk4MjM0M30.l0UgEfreMEIgapV_AAgUmO4U4dcbAvBPAjCe_UTJ6ck"
        }}).then(res=>{
                    this.setState({taskData:res.data.results})
                    console.log(res)
                }).catch(error =>{
                    console.log(error)
                })
    }
    render(){
        const carsView= this.state.taskData.length ? 
        (<Cards data={this.state.taskData}/>)
        : null;
        return(
            <div>
                {carsView}
            </div>
        );
    }
}

export default Tasks;