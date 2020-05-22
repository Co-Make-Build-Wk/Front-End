import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Profile.css';

const Profile = props => {

    return(
        <div className='profile_container'>
            <AccountCircleIcon style={{color: "#009DDC", fontSize: "72px"}}></AccountCircleIcon>
            <h3>FirstName LastName</h3>
            <h4>Location:<p>Sacramento, California</p></h4>
            <h4>Neighborhood<p>Midtown</p></h4>
            <h4>Your Issues<p>3</p></h4>
        </div>
    );

}

export default Profile;