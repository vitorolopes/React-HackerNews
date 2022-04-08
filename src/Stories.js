import React from 'react';
import {useGlobalContext} from './context'

const Stories = () => {

  const {isLoading, stories, removeStory} = useGlobalContext();

  if(isLoading){ 
   return <div className="loading"></div>
  }

  return (
    <section className='stories'>
      {stories.map(story=>{
        const {objectID, title, points, author, num_comments, url } = story
        return(
          <article key={objectID} className="story">
           <h4 className='title'> {title}</h4>
           <p className="info">
             {points} points by {author} | {num_comments} comments
           </p>
           <div>
            <a className='read-link'
               target="_blank" rel='noopener noreferrer'
               href={url}>
              read more
            </a>
            <button className="remove-btn"
                    onClick={() => removeStory(objectID)}
            >
              remove
            </button>
           </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
