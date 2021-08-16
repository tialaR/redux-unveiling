import { combineReducers } from 'redux';

import course from './course';

export default combineReducers({
  course,
});

// estrutura do objeto do combineReducers:
// { course: modules: [], activeLesson: null, activeModule: null }

/*
 ** combineReducers **
 -> Serve para quando temos vários reducers/funcionalidades dentro de nossa 
 aplicação.
 -> Quando utilizamos o combineReducers ele transforma o nosso estado em um objeto 
 que é subdividido em categorias baseadas em cada funcionalidade da nossa aplicação.
 -> O combineReducers da a possibilidade da aplicação trabalhar com várias
 funcionalidades ao mesmo tempo.
*/