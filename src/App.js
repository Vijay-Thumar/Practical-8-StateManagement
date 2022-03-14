import Signup from './component/Signup';
import SignupImg from './assets/signup.png';
import styles from './css/App.module.css';

function App() {
  return (
    <div className={`${styles.flex_container}`}>
        <div>
          <Signup />
        </div>
        <div>
          <img className={`${styles.signup_image}`} src={SignupImg}></img>
        </div>
    </div>
  );
}

export default App;
