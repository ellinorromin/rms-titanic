import { useRef, useState, useEffect } from "react";

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
}

function Movie(prop) {

  const {title, year, info, img} = prop.prop;

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

  return (
    <article>
      <img src={img} alt={`Poster för filmen "${title}"`} />
      <h1 className="articleHeader">{title}</h1>
      <h2>{year}</h2>
      <p style={isOpen ? null : paragraphStyles} ref={ref}>{info}</p>
      {showReadMoreBTN && (
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Read Less!" : "Read more!"}</button>
      )}
  </article>
  )
}

export default Movie