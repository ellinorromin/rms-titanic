import './Person.css'

function Person(prop) {

    const {info, name, role, survived, img} = prop.prop;
    console.log(info, name, role, survived);

  return (
    <article>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{info}</p>
        <p>{survived ? "Survived" : "Died"}</p>
    </article>
  )
}

export default Person