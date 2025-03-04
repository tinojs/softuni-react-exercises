import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function GameDetails() {
  const { email, userId } = useContext(AuthContext);
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);
  const { gameId } = useParams();

  useEffect(() => {
    gameService.getOne(gameId).then(setGame);

    commentService.getAll(gameId).then(setComments);
  }, [gameId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(gameId, values.comment);

    setComments((state) => [...state, { ...newComment, owner: { email } }]); //not only add the info for the new comment but add the author of it with their email.
  };

  const initialValues = useMemo(() => ({
    comment: "",
  }), []);

  const { values, onChange, onSubmit } = useForm(addCommentHandler, initialValues);

  const isOwner = userId === game._ownerId;

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt={game.title} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>

          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>
        {isOwner && (
          <div className="buttons">
            <Link to={pathToUrl(Path.GameEdit, { gameId })} className="button">
              Edit
            </Link>
            <Link to="/games/:gameId/delete" className="button">
              Delete
            </Link>
          </div>
        )}
      </div>
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
          <textarea
            name="comment"
            value={values.comment}
            onChange={onChange}
            placeholder="Comment......"
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </section>
  );
}
