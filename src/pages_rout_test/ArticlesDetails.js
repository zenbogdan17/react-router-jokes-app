import { useParams } from 'react-router-dom';

const ArticlesDetails = () => {
  const params = useParams();
  return (
    <section>
      <h1>Articles Details</h1>
      <p>{params.articleId}</p>
      <p>Lorem</p>
    </section>
  );
};
export default ArticlesDetails;
