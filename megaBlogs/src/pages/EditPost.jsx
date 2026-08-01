import React, { useEffect, useState } from "react";
import { container, PostForm } from "../compoents";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container } from ".";
import PostForm from "./../compoents/post-form/PostForm";

function EditPost() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Containe>
        <PostForm {...post} />
      </Containe>
    </div>
  ) : null;
}

export default EditPost;
