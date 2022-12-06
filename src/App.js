import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Posts App</h1>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddPostForm />
                <PostsList />
              </>
            }
          />
          <Route exact path="posts/:postId" element={<SinglePostPage />} />

          <Route exact path="editPost/:postId" element={<EditPostForm />} />
        </Routes>
        <div></div>
      </div>
    </Router>
  );
};

export default App;
