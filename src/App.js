import React from 'react';
import Split from './composition/split';
import './App.css'
import TheDate from './state/theDate'
import Counter from './state/Counter';
import Hello from './state-drills/hello-world'
import Bomb from './state-drills/bomb'
import Rullete from './state-drills/RulleteGun'

function App() {
  return (
    <div>
    <main className='App'>
      <Split className='left' flexBasis={4}>
      This is the content of the split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
      <Counter count={123} step={3}/>
      <Hello />
      </Split>
      <Split className='right'>
      This is the content of the split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
<TheDate />
      </Split>
     

   

    </main>

<Bomb />
<Rullete bulletInChamber={8}></Rullete>
</div>
  );
}

export default App;