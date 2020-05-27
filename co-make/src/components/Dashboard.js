import React, {useState} from 'react';
import Profile from './Profile.js';
import UserForm from './UserForm.js';
import UserIssues from './UserIssues.js';
import './Dashboard.css';

const Dashboard = props => {
    const [user, setUser] = useState([]);

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
                        <UserIssues user={user}/>
                    </div>
                    
                </div>
                
            </div>

        </div>
    );

}

export default Dashboard;