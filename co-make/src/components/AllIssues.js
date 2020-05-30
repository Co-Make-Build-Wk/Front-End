import React, {useState} from "react";
import "./AllIssues.css";

const AllIssues = props => {
    const { data } = props;
    console.log(data);
    
    return(
        <div className="users">
          {data.map(item => {
            return(
              <div className='issue_card'>
                
                <h3 className='issue_h3'>{item.login.username}</h3>
                <div className='issue_div'>
                  <h4 className='issue_h4'>Zipcode:</h4>
                  <p className='issue_p'>{item.location.postcode}</p>
                </div>
                <div className='issue_div'>
                  <h4 className='issue_h4'>Contact:</h4>
                  <p className='issue_p'>{item.email}</p>
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

export default AllIssues;