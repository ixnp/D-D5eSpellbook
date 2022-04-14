function Spell({spell:{name,school,casting_time,range, components, material=null, duration, classes, desc}}){
    console.log(components, material)
   
    return(
        <main>
            <h1>{name}</h1>
            <h3>{school.name}</h3>
            <p>{casting_time}</p>
            <p>{range}</p>
            <p>{components.join(' ')} </p> 
            {material&& <p>{material}</p>}
            <p>{duration}</p>
            <p>{classes.map(classObj => classObj.name).join(' ')}</p>
            <p>{desc.join(' ')}</p>
        </main>
    )
}

export default Spell