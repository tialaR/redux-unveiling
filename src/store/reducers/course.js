const INITIAL_STATE = {
  activeModule: null, // Módulo ativo
  activeLesson: null, // Lição ativa
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Primeira aula' },
        { id: 2, title: 'Segunda aula' },
      ]
    },
    {
      id: 2,
      title: 'Aprendendo Redux',
      lessons: [
        { id: 3, title: 'Terceira aula' },
        { id: 4, title: 'Quarta aula' },
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  // console.log('teste');
  // console.log(action);

  /* Atualizando o estado dos valores de activeModule e activeLesson 
  de acordo com a action TOGGLE_LESSON clicada quando clicada. Copia tudo que 
  tem no state e só altera as props que interessam. */
  if(action.type === 'TOGGLE_LESSON') {
    return { 
      ...state,  
      activeModule: action.module, 
      activeLesson: action.lesson,
    }
  }

  return state;
};

 /* 
   ** Reducer **
  ->No primeiro momento a função reducer vai retornar como o estado vai
  ser no início de tudo, ou seja, como o estado vai inicializar dentro da aplicação.abs
  -> O Reducer serve tanto para carregar o estado inicial da aplicação quanto 
  para manipular esse estado através de nossas actions (através de alterações).
  -> No reducer recebemos 2 parâmetros toda vez que uma action é disparada ou também
  no primeiro momento que o nosso store é construído.
  
   - reducer(state, action) - 
  -> onde o parâmetro state simboliza o estado anterior antes da alteração q/ a 
  action pretende fazer no nosso estado. Esse estado vem vazio no primeiro momento (qdo
  nenhuma action foi disparada ainda). Então é legal a gente preencher esse estado no 
  primeiro momento (que é quando ele vem vazio) com o estado inicial da nossa aplicação/Devemos
  designar um valor inicial para o reducer. no caso acima é o INITIAL_STATE.
  */ 
 