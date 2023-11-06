"use client";

import { useEffect, useState } from "react";
// supabase
import { supabase } from "../../../../utils/supabase";

const Header = () => {
  const [currentUser, setcurrentUser] = useState("");
  const getCurrentUser = async () => {
    const { data } = await supabase.auth.getSession()
    if (data.session !== null) {  
      const { data: { user } }:any  = await supabase.auth.getUser()
      setcurrentUser(user.email)
    }
  };

  useEffect(() => {
    getCurrentUser()
  },[])

  return (
    <>
      <h1></h1>
    </>
  );
};
