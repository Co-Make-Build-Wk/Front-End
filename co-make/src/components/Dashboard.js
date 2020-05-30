import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import Profile from './Profile.js';
import UserForm from './UserForm.js';
import UserIssues from './UserIssues.js';
import EditUserIssue from './EditUserIssue.js';
import AllIssues from "./AllIssues.js";
import './Dashboard.css';

const Dashboard = props => {
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);
    const [numb, setNumb] = useState(5);

    useEffect(() => {
      axios.get(`https://randomuser.me/api/?results=${numb}`)
      .then(response => {
        // console.log(response.data);
        setData(response.data.results);
      })
      .catch(err => {
          console.log(err);
      })
    }, [numb])


    const [formState, setFormState] = useState({
        issue: ""
      });
  
      const inputChange = e => {
        e.persist();
        // validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
        setNumb(e.target.value);
  
      };

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

                    <form>
                    <label htmlFor="issue">
                        Issues Per Page:
                        <select
                        value={formState.issue}
                        name="issue"
                        id="issue"
                        onChange={inputChange}
                        >
                        <option value="Blank"></option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        
                        </select>
                        
                    </label>
                    </form>
                    <AllIssues data={data}/>
                </div>
            </div>
            

        </div>
    );

}

export default Dashboard;