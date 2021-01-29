import s from './app.module.css';
import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Container from './Components/Container/Container';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        {/* <Route exact path="/" component={HomeView} /> */}
        {/* <Route path="/register" component={RegisterView} /> */}
        {/* <Route path="/login" component={LoginView} /> */}
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
