import { useState, useEffect, useCallback } from 'react';
import styles from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getComments } from '../../utils/firebase-api';
import Loader from '../UI/Loader';
import CommentsList from '../comments/CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { jokeId } = params;

  const {
    sendHttpRequest,
    status,
    data: loadedComments,
  } = useHttp(getComments);

  useEffect(() => {
    sendHttpRequest(jokeId);
  }, [jokeId, sendHttpRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const commentAddedHandler = useCallback(() => {
    sendHttpRequest(jokeId);
  }, [jokeId, sendHttpRequest]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className="centered">
        <Loader />
      </div>
    );
  }
  if (status === 'completed' && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">This joke doesn't have comment yet</p>;
  }
  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          jokeId={params.jokeId}
          onCommentAdded={commentAddedHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
