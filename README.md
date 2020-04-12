Projeto feito para aprendizagem prática do Redux utilizando React.

### Primeiros Passos para utilizar Redux
<ul>
  <li>
    <strong>Instalar Redux:</strong>
    
```sh
npm i redux
```
     
  </li>
  <li>
    <strong>Instalar a dependencia da tecnologia que está utilizando no projeto</strong>
  
```sh
npm i react-redux
```
    
  </li>
</ul>

### Criando uma store
Temos que ter uma STORE, que é onde vamos colocar todas os dados que queremos que seja gerenciada pelo Redux.
<ul>
  <li>
    <strong>Importar `createRedux` e criando a STORE:</strong>
    
```javascript
import { createStore } from 'redux';

const store = createStore();

export default store;
```
     
  </li>
  <li>
    <strong>Utilizando reducer</strong>
  <br/>
  A a store recebe um REDUCER que vai conter os dados.
    
```javascript
import { createStore } from 'redux';

function reducer() {
  return {
    activeLesson: null,
    activeModule: null,
    modules: [
      {
        id: 1,
        title: 'Modulo 1',
        lessons: [
          {id: 1, title: 'Primeira aula'},
          {id: 2, title: 'Segunda aula'},
        ]
      },
      {
        id: 1,
        title: 'Modulo 2',
        lessons: [
          {id: 2, title: 'Terceira aula'},
          {id: 3, title: 'Quarta aula'},
        ]
      },
    ]
  }
}


const store = createStore(reducer);

export default store;

```

### Adicionando STORE no App
Depois de criar a STORE temos que adicionar ela no App da nossa aplicações React e vamos fazer isso através do PROVIDER do react-redux.
<ul>
  <li>
    <strong>Importando e adicionando Provider e Store:</strong>
    
```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

function App() {
  return (
    <Provider store={store}>
       <Sidebar />
       <Video />
    </Provider>
  );
}

export default App;
```
     
  </li>
</ul>

### Obetendo os dados do reducer
Para pegar os dados do reducer e trazer para um componente, temos que usar o CONNECT do react-redux.
Onde exportamos o componente, nos executamos uma connect que recebe um state que vai conter todo o state do reducer.
Depois retornamos em forma de objeto aquilo que queremos para o componente.

```javascript
import React from 'react';

import { connect } from 'react-redux';

function Sidebar({ modules }) {
  return (
    <aside>
      {modules.map(module => {   
      
      ))}
    </aside>
  );
}

export default connect(state => ({ modules: state.modules }))(Sidebar);
```
 
