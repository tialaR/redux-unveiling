import React from 'react';
import { connect } from 'react-redux';

/* Componente que mostra qual vídeo do módulo que o usuário está 
ou o vídeo selecionado pelo usuário na SideBar */

const Video = ({ activeModule, activeLesson }) => {
  return(
    <div>
      <strong>Módulo {activeModule?.title}</strong>
      <span>Aula {activeLesson?.title}</span>
    </div>
  );
}

// Recuperando dados do estado GLOBAL e exibindo em outro componente
export default connect(state => ({ 
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
 }))(Video);
 /* 
->Nós sempre iremos nos comunicar com o Redux através do componente e o Redux
que terá o papel de se comunicar com eles não havendo assim a troca de informações
entre as props dos respectivos componentes.
-> É como se todos os componentes falassem com o Redux e o Redux distribuisse essas 
informações para todos os componentes que precisam dela. 
*/