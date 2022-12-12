import React from 'react'
import './uiCard.css'

function UiCard({
  title,
  description,
  codesnippet,
  codesnippet1,
  codesnippet2,
  children,
}) {
  return (
    <div className="uiCard">

      { title && <header className="uiCard--header">
        <h3>{title}</h3>
        <p>{description}</p>
      </header> }

      <section className="uiCard--section">
        {children ? children : <div>Please use Atom Display Component</div>}
      </section>

      { codesnippet && <footer className="uiCard--footer">
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

export default UiCard
