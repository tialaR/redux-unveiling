import { Provider } from 'react-redux';
import store from './store';

import SideBar from './components/SideBar';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  );
}

export default App;

/* 
** Provider **
  -> O Provider do react-redux utiliza a contex API  que é uma forma 
  de repassarmos a todos os componentes filhos algum tipo de informação. 
  Através do provider conseguiremos passar informações para os componentes 
  em vários níveis independente de quem seja o pai ou o filho. 
  Ou seja, vamos passar através do uso do Provider as informações contidas 
  no store do redux p/ que todos eles possam acessar essa informação. 
*/
