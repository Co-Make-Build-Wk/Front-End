import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import Profile from './Profile.js';
import UserForm from './UserForm.js';
import UserIssues from './UserIssues.js';
import EditUserIssue from './UserIssues.js';
import AllIssues from "./AllIssues.js";
import './Dashboard.css';

const Dashboard = props => {
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(`https://randomuser.me/api/?results=10`);

    useEffect(() => {
      axios.get(url)
      .then(response => {
        // console.log(response.data);
        setData(response.data.results);
      })
      .catch(err => {
          console.log(err);
      })
    }, [url])

    return(
        <div className='db_container'>
            <div className='sidebar'>
               <h2>Co-Make</h2>
               <Profile />
            </div>
            <div className='issues_container'>
                <div className='user_issues'>
                    <div className='user_issues_section'>
                      <UserForm  user={user} setUser={setUser}/>  
                    </div>
                    <div className='user_issues_section'> 
                    <h3>YOUR ISSUES</h3>
                    <Route exact path="/">
                            <UserIssues user={user}/>  
                    </Route>
                    <Route exact path="/edit/:id">
                        <EditUserIssue user={user} setUser={setUser}/>  
                    </Route>    

                        
                    </div>
                    
                </div>
                <div className='all_issues'>
                    <h3>All ISSUES</h3>
                    <AllIssues data={data}/>
                </div>
            </div>
            

        </div>
    );

}

export default Dashboard;