import './App.css';
import Header from './components/header/header.component';
import Card from './components/card/card.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function App(props) {
  const { setCurrentUser } = props;
  return (
    <div className="App">
      <button onClick={() => setCurrentUser({ name: 'John', email: '@blah.com' })}>Update Name</button>
      <Header />
      <Card />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// Pass null because you don't need any props here (user is used in Header)
export default connect(null, mapDispatchToProps)(App);
