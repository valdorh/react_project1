import React from "react";

const Content = () => {
  return (
    <section className="content">
      <div>
        <img
          src="https://avatars.mds.yandex.net/get-pdb/368827/a3b96a11-a0df-4437-82f2-6358e50788e2/s1200"
          alt=""
          className="img-main"
        />
      </div>
      <div className="profile-descr">
        {" "}
        Profile
        <img src="" alt="Avatar" />
        <div className="description"></div>
      </div>
      <article className="new-post">
        New Post
        <button>Send</button>
      </article>
      <div className="old-posts">Oldpost</div>
    </section>
  );
};
export default Content;
