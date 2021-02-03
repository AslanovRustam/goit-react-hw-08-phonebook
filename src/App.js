import s from './app.module.css';
import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Container from './Components/Container/Container';
import HomeView from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from './redux/contacts-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={ContactsView} />
        {/* <Route path="/contacts" exact>
          <ContactsView />
        </Route> */}
      </Switch>
    </Container>
  );
}

// export default connect()(App);
export default App;
