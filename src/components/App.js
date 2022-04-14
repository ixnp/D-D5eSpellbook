import {useState,useEffect} from 'react'
import {fetchResources} from '../serverCommunication/fetchCalls'

import SpellList from './SpellList'
import Spell from './Spell'

function App() {
  const [loading, setLoading] = useState(false)
  const [spells, setSpells] = useState([])
  const [selectedSpell, setSelectedSpell]  = useState(null)
  useEffect(()=>{
    fetchResources('https://www.dnd5eapi.co/api/spells')
    .then(resObj => setSpells(resObj.results))
    .then(()=> setLoading(true))
  }, [])

  //Event Handlers
  const selectSpell = (spell) => {
    fetchResources(`https://www.dnd5eapi.co/api/spells/${spell.index}`)
    .then(resObj => setSelectedSpell(resObj))

  }

  if(!loading) return <div>Loading...</div>
  return (
  <>
    {selectedSpell&& <Spell spell={selectedSpell} />}
    <SpellList spells={spells} selectSpell={selectSpell}/>
  </>
  );
}

export default App;
