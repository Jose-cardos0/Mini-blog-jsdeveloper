import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

import PostDetails from "../../components/PostDetails";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h2>Search</h2>

      {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
        </div>
      )}
      {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}
      {posts && (
        <Link to="/" className="btn btn-dark">
          Voltar
        </Link>
      )}
    </div>
  );
};

export default Search;
