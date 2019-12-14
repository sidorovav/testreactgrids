import React, {Suspense} from 'react';
import './App.css';
import {useResource} from './resource'
import { Posts } from './Posts';
import { Photos } from './Photos';
import Table from './component/table'
import Mytable from './component/mytable';

const resource = useResource()
function App() {
  return (
    <div className="App" className="container">
      <h2>Фотоальбом</h2>
      <Mytable />
      {/* <Suspense fallback={<p>Загружается...</p>}>
        <Table resource={resource}/>
      </Suspense> */}
      {/* <Suspense fallback={<p>Загружается...</p>}>
        <Posts resource={resource}/>
      </Suspense>
      <Suspense fallback={<p>Загружается...</p>}>
        <Photos resource={resource}/>
      </Suspense> */}
    </div>
  );
}

export default App;
