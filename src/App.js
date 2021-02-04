import s from './app.module.css';
import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Container from './Components/Container/Container';
import HomeView from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from './redux/contacts-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import authSelectors from './redux/auth-selectors';

// const HomeView = lazy(() => import('./Components/Home/Home'));
// const Registration = lazy(() =>
//   import('./Components/Registration/Registration'),
// );
// const Login = lazy(() => import('./Components/Login/Login'));
// const ContactsView = lazy(() => import('./ContactsView'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  const isFetchinCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  console.log(isFetchinCurrentUser);
  return (
    // !isFetchinCurrentUser && (
    isFetchinCurrentUser ? (
      <h1>Please stand by, the application is loading...</h1>
    ) : (
      <Container>
        <AppBar />

        <Switch>
          {/* <Route exact path="/" component={HomeView} /> */}
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <Registration />
          </PublicRoute>
          <PublicRoute exact path="/login" restricted>
            <Login />
          </PublicRoute>
          {/* <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} /> */}
          {/* <Route path="/contacts" component={ContactsView} /> */}
          <PrivateRoute path="/contacts" exact>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    )
  );
}

// export default connect()(App);
export default App;
