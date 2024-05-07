import styles from "../components/PostDetails.module.css";

import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p className={styles.createdBy}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetails;
