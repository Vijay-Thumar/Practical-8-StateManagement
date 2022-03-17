import { Provider } from 'react-redux';
import store from './store/mystore';
import MainContainer from './component/MainContainer';

function App() {
  return (
    <Provider store={store}>
    <MainContainer/>
    {/* <Login/> */}
    </Provider>
  );
}

export default App;