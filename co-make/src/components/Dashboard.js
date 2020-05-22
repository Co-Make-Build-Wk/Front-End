import React from 'react';
import Profile from './Profile.js';
import InputForm from './InputForm.js';
import './Dashboard.css';

const Dashboard = props => {

    return(
        <div className='db_container'>
            <div className='sidebar'>
               <h2>Co-Make</h2>
               <Profile />
            </div>
            <div className='issues_container'>
                <InputForm />
            </div>

        </div>
    );

}

export default Dashboard;