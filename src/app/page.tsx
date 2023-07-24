"use client"

import { useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';
import Link from 'next/link';
import Header from './header/page';

const Login: NextPage = () => {
  // sessionには、以下のような値が入っています。
  // {
  //     "user":{
  //        "name":"John",
  //        "email":"john@examle.com",
  //        "image":"https://lh3.googleusercontent.com/a/AGNmyxZF7jQN_YTYVyxIx5kfdo3kalfRktVD17GrZ9n=s96-c"
  //     },
  //     "expires":"2023-04-01T00:29:51.016Z"
  // }
  const { data: session } = useSession();

  return (
    <>
      {
        // セッションがある場合、ログアウトを表示
        session && (
          <div>
            <Header />
            <h1>ようこそ, {session.user && session.user.email}</h1>
            <button onClick={() => signOut()}>ログアウト</button>
            <Link href="/profile1">
              <button>プロフィール1</button>
            </Link>
            {/* <Link href="/profile2">
              <button>プロフィール2</button>
            </Link> */}
          </div>
        )
      }
      {
        // セッションがない場合、ログインを表示
        // ログインボタンを押すと、ログインページに遷移する
        !session && (
          <div>
            <p>ログインしていません</p>
            <button onClick={() => signIn()}>ログイン</button>
            
          </div>
        )
      }
    </>
  );
};

export default Login;