import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './UserForm.css';


const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required"),
    zipcode: yup.string().required("Zipcode is a required"),
    issue: yup.string().required("Must choose an related issue field"),
    details: yup.string().required("Please add some details about your issue")
  });
  
  const UserForm = props => {
    const { setUser, user } = props;

    // managing state for our form inputs
    const [formState, setFormState] = useState({
      username: "",
      zipcode: "",
      issue: "",
      details: ""
    });
  
    // BONUS!: state for whether our button should be disabled or not.
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // const [user, setUser] = useState([]);
    // Everytime formState changes, check to see if it passes verification.
    // If it does, then enable the submit button, otherwise disable
    useEffect(() => {
      formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
      });
    }, [formState]);

  
    const [errorState, setErrorState] = useState({
      username: "",
      zipcode: "",
      issue: "",
      details: ""
    });
  
    const validate = e => {
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
          setErrorState({
            ...errorState,
            [e.target.name]: ""
          });
        })
        .catch(err => {
          setErrorState({
            ...errorState,
            [e.target.name]: err.errors[0]
          });
        });
    };
  
    // onChange function
    const inputChange = e => {
      e.persist();
      // console.log("input changed!", e.target.value, e.target.checked);
      validate(e);
      let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormState({ ...formState, [e.target.name]: value });
    };
  
    const formSubmit = e => {
      e.preventDefault();
      console.log("form submitted!");
      axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            setUser([...user, response.data]);
            setFormState({
              username: "",
              zipcode: "",
              issue: "",
              details: ""
              });
        })
        .catch(err => console.log(err));
    };
  
    return (
      <div className="form_container">
        <h3>SUBMIT ISSUES BELOW</h3>
        <form onSubmit={formSubmit}>
          <div className='form_left'>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                id="username"
                value={formState.username}
                onChange={inputChange}
              />
            </label>
            <label htmlFor="zipcode">
              Zipcode
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                value={formState.zipcode}
                onChange={inputChange}
              />
            </label>
          
            <label htmlFor="issue">
                What is your issue related to?
                <select
                value={formState.issue}
                name="issue"
                id="issue"
                onChange={inputChange}
                >
                <option value="Blank"></option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Road">Road</option>
                </select>
                {errorState.issue.length > 0 ? (
                <p className="error">{errorState.issue}</p>
                ) : null}
            </label>
            <label htmlFor="details">
              Please provide some details
              <textarea
                type="text"
                resize="none"
                name="details"
                id="details"
                value={formState.details}
                onChange={inputChange}
              />
            </label>

            <button disabled={buttonDisabled}>Submit</button>
          </div>

        </form>
    
      </div>
      
    );
  }

  export default UserForm;
  