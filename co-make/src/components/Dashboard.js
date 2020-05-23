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
                    <UserForm  user={user} setUser={setUser}/>
                    <UserIssues user={user}/>
                </div>
                
            </div>

        </div>
    );

}

export default Dashboard;