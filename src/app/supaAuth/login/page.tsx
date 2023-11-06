'use client'

import { useState } from "react";
import { supabase } from "../../../../utils/supabase";

export default function Register() {
  // useStateで管理
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-3">ログイン</h1>
      <form className="w-fit mx-auto">
        <div className="inner">
          <label htmlFor="email" className="w-2/5 inline-block text-center">
            メールアドレス：
          </label>
          <input
            className="w-3/5"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password" className="w-2/5 inline-block text-center">
            パスワード：
          </label>
          <input
            className="w-3/5"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            onClick={() => doLogin()}
            className="block mx-auto rounded bg-blue-400 py-1 px-2"
          >
            ログイン
          </button>
        </div>
      </form>
    </>
  );
}
