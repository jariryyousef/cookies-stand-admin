import Head from 'next/head'
import LoginForm from '../components/LoginForm';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/main';
import { useAuth } from '../contexts/auth'
import CookieStandAdmin from '../components/CookieStandAdmin';

export default function Home() {
  const { user, login, logout } = useAuth();


  return (
    <div className="">

      {user ? 
          <CookieStandAdmin />: <LoginForm/>
      }

    </div>
  )
}
