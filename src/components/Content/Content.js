import React from "react";
import style from './Content.module.css'
import OldPosts from "./MyPosts/OldPosts/OldPosts";
import NewPost from "./MyPosts/NewPost";

const Content = () => {
  return (
    <section >
      <div>
        <img
          src="https://avatars.mds.yandex.net/get-pdb/368827/a3b96a11-a0df-4437-82f2-6358e50788e2/s1200"
          alt=""
          className={style.img_main}
        />
      </div>
      <div className="profile_descr">
        Profile
        <img src="" alt="Avatar" />
        <div className="description"></div>
      </div>
      <NewPost />
      <OldPosts message='A you Post lorem' likeCount='20' />
      <OldPosts message='New Post Tuday' likeCount='47' />
    </section>
  );
};
export default Content;
