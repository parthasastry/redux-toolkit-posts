import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
  let { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <section>
      <button>
        <Link to="/">Go Home</Link>
      </button>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button>
          <Link to={`/editPost/${post.id}`}>Edit Post</Link>
        </button>
      </article>
    </section>
  );
};

export default SinglePostPage;
