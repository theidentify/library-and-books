import { Outlet, Link } from 'react-router-dom';
import SignIn from '../components/user/sign-in';

function Root() {
  return (
    <>
      <header>
        <nav className='flex justify-center'>
          <ul className='w-[800px] flex'>
            <li className='ml-auto'>
              <Link to='/sign-in'>Sign In</Link>
            </li>
            {/* <li>
              <Link>Sign Out</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

Root.SignIn = SignIn;

export default Root;
