import { useEffect,useState } from "react";
import { useParams,Link } from 'react-router-dom'
import { Button } from "@mui/material";

interface Task {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export function Tasks(){
    const [tasks,setTasks]= useState<Task[]>()
     const params =useParams()

     const fetchTasks= async ()=>{
        const response=await fetch(`https://jsonplaceholder.typicode.com/todos `)
        const result = await response.json() as unknown as Task[]
        setTasks(result.filter((task) => task.userId === Number(params.id)))
     }
     useEffect(()=>{
        fetchTasks()
      },[])

      return (
        <div className="tasks">
          <Link to={'/'}>
            <Button variant="contained">home pge</Button>
          </Link>  
          {tasks?.map((task,index)=>(
            <Link key={index} to={`/${task.id}`}>
              <div key={task.id} >
                {task.title}
              </div>
            </Link>
          ))}
        </div>
      );
}