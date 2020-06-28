import React from 'react'
import style from './NewPost.module.css'
const NewPost = () => {
    return (
        <article className={style.new_post}>
            New Post
            <button>Send</button>
        </article>
    )
}
export default NewPost