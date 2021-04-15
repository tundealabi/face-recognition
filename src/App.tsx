import { Redirect, Route } from 'react-router-dom';
import Navigation from 'components/sign-in-and-sign-out-nav/navigation';
import './App.scss';
import SigninAndSignupPage from 'pages/sign-in-and-sign-up/SigninAndSignup';
import HomePage from 'pages/homepage/Homepage';
import { useAppSelector } from 'redux/hooks';


const App = () =>  {
  const userStatus = useAppSelector(({ user: { userState } }) => userState );
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/'>
        {
          userStatus ? 
            <HomePage />
            :
            <Redirect to='signin' />
        }
      </Route>
      <Route path='/signin'>
        <SigninAndSignupPage />
      </Route>
      
    </div>
  )
};

export default App;
