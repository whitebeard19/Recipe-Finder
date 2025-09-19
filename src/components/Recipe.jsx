import React from 'react'
import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
  return (
    <section>
            <h2>AI Chef Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown>{props.recipe}</ReactMarkdown>                
            </article>
        </section>
  )
}
