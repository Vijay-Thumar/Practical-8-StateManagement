// import Signup from './component/Signup';
import SignupImg from './assets/signup.png';
import styles from './css/App.module.css';
import Signup2 from './component/Signup2';
// import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './store/mystore';

function App() {
  return (
    <Provider store={store}>
    <div className={`${styles.flex_container}`}>
        <div className={`${styles.form_container}`}>
          <Signup2 />
        </div>
        <div>
          <img className={`${styles.signup_image}`} src={SignupImg} alt='Home page background_img'></img>
        </div>
    </div>
    </Provider>
  );
}

export default App;