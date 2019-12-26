import React from 'react';
import Split from './composition/split';
import './App.css'
import TheDate from './state/theDate'
import Counter from './state/Counter';
import Hello from './state-drills/hello-world'
import Bomb from './state-drills/bomb'
import Rullete from './state-drills/RulleteGun'
import Tabs from './Tabs/tabs'
import Sections from './state-drills/Accordian'

const sections = [
{title: 'First section', content: 'Section 1 content....'},
{title: 'Second section', content: 'Section 2 content....'}
]

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

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
<Tabs tabs={tabsProp} />
<Sections sections={sections} />
</div>
  );
}

export default App;