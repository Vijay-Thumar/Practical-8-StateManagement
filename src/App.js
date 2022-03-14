import Signup from './component/Signup';
import SignupImg from './assets/signup.png';
import styles from './css/App.module.css';
import Signup2 from './component/Signup2';

function App() {
  return (
    <div className={`${styles.flex_container}`}>
        <div>
          <Signup2 />
        </div>
        <div>
          <img className={`${styles.signup_image}`} src={SignupImg}></img>
        </div>
    </div>
  );
}

export default App;
