import React from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Metting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Add Task

  const addTask =(task)=>{
  const id = Math.floor(Math.random()*1000)+1;
  const newTask = { id , ...task};
  setTasks ([...tasks,newTask])
  }
  //Delete Task

  const deleteTask = (id) => {
    console.log("delete",id);
    setTasks(tasks.filter((task)=>task.id!==id))
  };

//Toggle Reminder

const toggleReminder = (id)=>{
  console.log(id);
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}

  return ( 
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
     { tasks.length >0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>: "No Task Available"}
    </div>
  );
}

export default App;
