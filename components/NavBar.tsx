
import React from "react";
import Mobilemenu from "./Mobilemenu";
import { auth } from "@/auth";

export default async function NavBar() {
  const user = await auth();
  return (
    <div>
      
      <Mobilemenu user={user} />

     
    </div>
  );
}
