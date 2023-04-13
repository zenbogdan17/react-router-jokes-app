import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedJoke from '../components/jokes/HighlightedJoke';
import useHttp from '../hooks/use-http';
import { getJoke } from '../utils/firebase-api';
import { useEffect } from 'react';
import Loader from '../components/UI/Loader';

// const DUMMY_JOKES = [
//   {
//     id: 'j1',
//     topic: 'Programmig',
//     text: `How many programmers does it take to change a ligth buid? None - It's a hardware problem`,
//   },
//   {
//     id: 'j2',
//     topic: 'General',
//     text: `How many bones are in the humen hand? A handful of them`,
//   },
// ];

const JokesDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  const { jokeId } = params;

  const {
    sendHttpRequest,
    status,
    data: loadedJokes,
    error,
  } = useHttp(getJoke, true);

  // const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [sendHttpRequest, jokeId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedJokes.text) {
    return <h1 className="centered">Joke not found</h1>;
  }

  return (
    <Fragment>
      <HighlightedJoke text={loadedJokes.text} topic={loadedJokes.topic} />
      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn--empty" to={`${routeMatch.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default JokesDetails;
