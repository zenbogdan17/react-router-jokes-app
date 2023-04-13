import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import JokeItem from './JokeItem';
import styles from './JokeList.module.css';

const sortJokes = (jokes, isAscending) => {
  return jokes.sort((joke1, joke2) => {
    if (isAscending) {
      return joke1.id > joke2.id ? 1 : -1;
    } else {
      return joke1.id < joke2.id ? 1 : -1;
    }
  });
};

const JokeList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get('sort');
  const isSortAscending = sortingOrder === 'asc';
  const sortedJoke = sortJokes(props.jokes, isSortAscending);

  const toggleSortingHandler = () => {
    history.push('/jokes?sort=' + (isSortAscending ? 'desc' : 'asc'));
  };
  return (
    <Fragment>
      <div className={styles.sort}>
        <button onClick={toggleSortingHandler}>
          Sort Jokes{isSortAscending ? ' Descending' : ' Ascending'}
        </button>
      </div>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
