import './Person.css'
import { useEffect, useState, useRef } from 'react';

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
}

function Person(prop) {

  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreBTN, setShowReadMoreBTN] = useState(false)

  const ref = useRef(null)

  useEffect(()=>{
    if(ref.current){
      setShowReadMoreBTN(
        ref.current.scrollHeight !== ref.current.clientHeight
        )
    }
  }, [])

    const {info, name, role, survived, img} = prop.prop;

  return (
    <article className='articleHeader'>
        <img src={img} alt={`${name}`} />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{survived ? "Överlevde" : "Omkom"}</p>
        <p style={isOpen ? null : paragraphStyles} ref={ref}>{info}</p>
        {showReadMoreBTN && (
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Läs mindre!" : "Läs mer!"}</button>
        )}
    </article>
  )
}

export default Person