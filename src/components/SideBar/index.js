import React from 'react';
import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

//Helper do Redux:
/* bindActionCreators -> vai pegar o objeto de actions importado de outro arquivo e vai 
mapear em forma de propriedades para o nosso componente */
import { bindActionCreators } from 'redux';

const SideBar = ({ modules, handleToggleLession }) => {

  return(
    <aside>
      {modules.map(module => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => handleToggleLession(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

const mapStateToProps = state => ({ 
  modules: state.course.modules 
});

// const mapDispatchToProps = dispatch => ({
//   handleToggleLession: (module, lesson) => dispatch(CourseActions.handleToggleLession(module, lesson)),
// });

const mapDispatchToProps = dispatch => 
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

/* 
 ** connect **
 -> Serve para compartilhar com os componentes o estado do redux.
 -> uma forma de recuperar os dados contidos no store do redux é utilizando o connect
 fo react-redux. Ele segue um conceito chamado High Order Component, sendo ele um pattern
 do React p/ gente conseguir compartilhar alguma informação para algum componente.
 -> No primeiro parâmetro ele recebe uma função que recebe um estado deve ser retornado
 dessa função quais propriedades eu quero eu quero daquele estado.
 -> A partir do uso do connect conseguimos compartilhar os estados em qualquer parte
 de nossa aplicação.
 
 ** dispatch **
 -> Em todo componente que usamos o connect do redux também teremos acesso a uma 
 função chamada dispatch.
 -> Essa dispatch serve para dispararmos actions para o redux. 
 -> Essas actions vão ser ouvidas por todos os reducers de nossa aplicação.

 ** mapStateToProps **
 -> É o primeiro parâmetro da função connect -> Ela é uma função que recebe um estado 
 e retorna um objeto.

 ** mapDispatchToProps **
 -> Ele também retorna um objeto onde posso dar nomes para as minhas funções (para as minhas actions ):
 ex: handleToggleLession
 -> Ela dispara o dispatch recebido como parâmetro
*/