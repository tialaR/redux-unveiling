// Action - Seta uma lession e um módulo como ativo
export function handleToggleLession(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    lesson,
    module,
  };
}

 /* 
  ** Action **
  A action retorna um objeto com um formato padrão q/ o Redux utiliza.
  Onde sempre vamos precisar de uma chave com uma propriedade chamada 'type' 
  que vai indicar qual que é a ação que está sendo realizada e essa ação precisa
  ser única dentro do redux.
  No retorno da ação também podemos enviar qualquer tipo de informação como no exemplo
  enviamos a lesson e module.
  */