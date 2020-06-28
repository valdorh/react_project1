import React from 'react'
import style from './OldPosts.module.css'
// console.log(style);
const OldPosts = (props) => {
    return (
        <article className={style.old_posts}>
            <img src="https://2.cdn.echo.msk.ru/files/3280765.jpg" alt="" className={style.avatar} />
            <p className={style.text}>
                {props.message}
            </p>
            <span>Like: {props.likeCount}</span>
        </article>
    )
}
export default OldPosts
