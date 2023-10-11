import classes from './Auth.module.css';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const token = "hsakkdjkl"
  const email = "nomail@nomail.com"

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    dispatch(authActions.logIn({token, email}))
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
