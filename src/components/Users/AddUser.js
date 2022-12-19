import React, {useState} from "react";
import Wrapper from "../Helpers/Wrapper";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [addUsername, setAddUsername] = useState('');
  const [addAge, setAddAge] = useState('');
  const [error, setError] = useState();
  
  const addUsernameHandler =(event)=>{
    setAddUsername(event.target.value)
  }

  const addAgeHandler =(event)=>{
    setAddAge(event.target.value)
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if(addUsername.trim().length===0 || addAge.trim().length===0){
      setError({
        title: "Invalid Input",
        message: "Please enter your name and age (no empty field)."
      }) 
      return;
    }
    if(+addAge<1){
      setError({
        title: "Invalid Age",
        message: "Please enter your age (> 0)."
      }) 
      return;
    }
    props.onAddUser(addUsername, addAge);
    setAddUsername('');
    setAddAge('');
  };

  const errorHandler=()=>{
    setError(null);
  }
  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={addUsername} onChange={addUsernameHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={addAge} onChange={addAgeHandler}/>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
