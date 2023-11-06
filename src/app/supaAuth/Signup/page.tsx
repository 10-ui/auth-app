'use client';
import { useState } from 'react';
import { supabase } from '../../../../utils/supabase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (signUpError) {
        throw signUpError;
      }
      alert('登録完了メールを確認してください。');
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <>
      <div className="container h-screen grid items-center justify-center">
        <div className="inner">
          <h1 className="text-2xl font-bold text-center">新規登録フォーム</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">パスワード</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="passwordConf">パスワード(再入力)</label>
              <input
                type="password"
                name="passwordConf"
                id="passwordConf"
                required
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>
            <div>
              <button className="bg-orange-300 py-1 px-3 rounded" type="submit">
                サインアップ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
