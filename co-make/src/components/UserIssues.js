import React from "react";
import "./UserIssues.css";

const UserIssues = props => {
    const { user } = props;

    return(
        <div className="users">
          {user.map(item => {
            return(
              <div className='issue_card'>
                <h3 className='issue_h3'>{item.username}</h3>
                <div className='issue_div'>
                  <h4 className='issue_h4'>Zipcode:</h4>
                  <p className='issue_p'>{item.zipcode}</p>
                </div>
                <div className='issue_div'>
                  <h4 className='issue_h4'>Issue:</h4>
                  <p className='issue_p'>{item.issue}</p>
                </div>
                <div className='issue_div'>
                  <h4 className='issue_h4'>Details:</h4>
                  <p className='issue_p'>{item.details}</p>
                </div>
              </div>
            ); 
          })}
          
        </div>
        
    );
    
}

export default UserIssues;