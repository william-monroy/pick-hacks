import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
import styles from "./Post.module.css";

const Post = ({
  avatar,
  username,
  years,
  height,
  weight,
  country,
  title,
  image,
  content,
  likes,
  like = false,
  favorite = false,
}) => {
  const [liked, setLiked] = useState(like);
  const [favorited, setFavorited] = useState(favorite);
  const [numLikes, setNumLikes] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    handleLikeNum();
  };
  const handleFavorite = () => setFavorited(!favorited);
  const handleLikeNum = () =>
    setNumLikes(numLikes == likes ? numLikes + 1 : numLikes - 1);

  return (
    <div className={styles.Post}>
      <div className={styles.Post__header}>
        <div className={styles.Post__header__left}>
          <img
            src={avatar}
            alt="user avatar"
            className={styles.Post__header__avatar}
          />
          <div className={styles.Post__header__info}>
            <h3 className={styles.Post__header__username}>{username}</h3>
            <p className={styles.Post__header__infoUsername}>
              {years} years, {height} cm, {weight} kg, {country}
            </p>
          </div>
        </div>
        <div
          className={styles.Post__header__right}
          style={{ color: `${favorited ? "#f5b900" : "#cbc4c4"}` }}
          onClick={handleFavorite}
        >
          <FaStar />
        </div>
      </div>
      <div className={styles.Post__content}>
        <h2 className={styles.Post__title}>{title}</h2>
        <img src={image} alt="post image" className={styles.Post__image} />
        <p className={styles.Post__text}>{content}</p>
      </div>
      <div className={styles.Post__reactions}>
        <div className={styles.Post__likes}>
          <div
            className={styles.Post__like__icon}
            style={{ color: `${liked ? "tomato" : "#cbc4c4"}` }}
            onClick={handleLike}
          >
            <BsHeartFill />
          </div>
          <p className={styles.Post__likes__text}>{numLikes}</p>
        </div>
        <div className={styles.Post__share__icon}>
          <IoMdShareAlt />
        </div>
      </div>
    </div>
  );
};

export default Post;
