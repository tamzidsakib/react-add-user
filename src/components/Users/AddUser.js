import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [addUsername, setAddUsername] = useState('');
  const [addAge, setAddAge] = useState('');
  
  const addUsernameHandler =(event)=>{
    setAddUsername(event.target.value)
  }

  const addAgeHandler =(event)=>{
    setAddAge(event.target.value)
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
    if(addUsername.trim().length===0 || addAge.trim().length===0){
      return;
    }
    if(+addAge<1){
      return;
    }
    props.onAddUser(addUsername, addAge);
    setAddUsername('');
    setAddAge('');
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={addUsername} onChange={addUsernameHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={addAge} onChange={addAgeHandler}/>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
