import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Example.css";
import { Contacts } from "../Contacs/Contacts";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function Users() {
  const [users, setUsers] = useState<User[]>();

  const  fetchUsers= async ()=>{
    try{
      const response= await fetch('https://jsonplaceholder.typicode.com/users') 
      const result=await response.json() as unknown as User[]
      setUsers(result)
    }catch(error){
       console.log(error);
    }
  }

  useEffect( ()=>{
     fetchUsers()
  },[])

  return (
    <div className="users">
      {users?.map((user,index)=>(
        <Link key={index} to={`/${user.id}`}>
          <div key={user.id} >
            {user.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
