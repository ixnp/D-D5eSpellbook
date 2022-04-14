function SpellList({spells, selectSpell}){
    return(
        <>
        <ul>
            {spells.map(spell => {
                return <li onClick={() => selectSpell(spell)}>{spell.name}</li>
            })}
        </ul>
        </>
    )
}
export default SpellList