import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

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

export function Contacts() {
  const [user, setUser] = useState<User>();
  const params = useParams();

  const fetchUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const result = (await response.json()) as unknown as User;
    setUser(result);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Link to={"/"}>
        <Button variant="contained">home pge</Button>
      </Link>
      <h3>email:{user?.email}</h3>
      <h3>phone:{user?.phone}</h3>
      <h3>address:{user?.address.street}</h3>
      <Link to={`/${params.id}/tasks`}>
        <Button variant="contained">tasks</Button>
      </Link>
    </div>
  );
}
