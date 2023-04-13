import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <section>
      <h1>Articles page</h1>
      <ul>
        <li>
          <Link to="/articles/a1">Articles 1</Link>
        </li>
        <li>
          <Link to="/articles/a2">Articles 2</Link>
        </li>
        <li>
          <Link to="/articles/a3">Articles 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Articles;
