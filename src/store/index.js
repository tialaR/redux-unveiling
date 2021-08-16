import { createStore } from 'redux';
import rootReducers from './reducers'; //Todos os reducers/funcionalidades da aplicação

const store = createStore(rootReducers);

/* Exportando estado global p/ q/ possa ser utilizado por toda aplicação */
export default store;


/* 
** createStore **
  ->A função createStore do redux cria o estado GLOBAL (um store) que é onde
  fica armazenado a maioria das informações da nossa aplicação.
  -> A função createStore recebe um parâmetro obrigatório que é uma função que 
  retorna o nosso estado inicial. Então eu chamo essa função de Reducer.
*/
