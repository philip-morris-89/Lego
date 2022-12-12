import React from 'react'
import './atomCard.css'

function AtomCard({
  title,
  description,
  codesnippet,
  codesnippet1,
  codesnippet2,
  children,
}) {
  return (
    <div className="atomCard">

      { title && <header className="atomCard--header">
        <h3>{title}</h3>
        <p>{description}</p>
      </header> }

      <section className="atomCard--section">
        {children ? children : <div>Please use Atom Display Component</div>}
      </section>

      { codesnippet && <footer className="atomCard--footer">
        <h6>Code snippet:</h6>
        <section>
          <p>{codesnippet}</p>
          {codesnippet1 && <p>{codesnippet1}</p>}
          {codesnippet2 && <p>{codesnippet2}</p>}
        </section>
      </footer>}
    </div>
  )
}

export default AtomCard
