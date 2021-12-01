import Head from 'next/head'
import LoginForm from '../components/LoginForm';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/main';
import { useAuth } from '../contexts/auth'

export default function Home() {
  const { user, login, logout } = useAuth();


  return (
    <div className="">
      <Head>
        <title>Cookie Stand Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {user ? 
        <Main /> : <LoginForm />
      }
      
      <Footer />


    </div>
  )
}
