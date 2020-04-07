import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTitle } from '../utils/common';

import styled from 'styled-components';
import LikedButton from './LikedButton';

const StyledItem = styled.div`
  border-top: 1px solid lightgray;

  padding-top: 3px;

  .item-image-wrap {
    height: 100%;
    max-height: 40vw;
    min-height: 40vw;
    overflow: hidden;
    .item-image {
      width: 100%;
    }
  }

  .item-info {
    width: 100%;
    display: inline-block;
    min-height: 40px;
    max-height: 40px;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .item-footer {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;

    ul {
      display: flex;
      li {
        margin-left: 10px;
        i {
          margin-right: 5px;
        }
        a {
          color: #999;
        }
      }
    }
    .item-date {
      font-style: italic;
    }
  }
  @media (max-width: 960px) {
    /* item */
    .item-image-wrap .item-md {
      img {
        width: 0.8vw;
      }
      .item-md-name {
        font-size: 2vw;
      }
    }
    .item-date.info .tags h4 {
      font-size: 2.4vw;
    }
  }
`;

const MemoizeItem = React.memo(function Item({
  id,
  mediaList,
  text,
  likedCount = 0,
  replyCount = 0,
  sharedCount = 0,
  createdAt,
  isLiked,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'Work_LIKE', payload: { id } });
    console.log('click');
  };

  const shareUrl = encodeURIComponent(`https://port04.now.sh/work/${id}`);
  return (
    <StyledItem>
      <Link to={{ pathname: `/work/${id}` }}>
        <figure className='item-image-wrap'>
          <img src={mediaList[0].url} className='item-image' alt='피드 대표이미지' />
        </figure>

        <article className='item-info'>
          <p>{createTitle(text)}</p>
        </article>
      </Link>
      <div className='item-footer'>
        <em className='item-date'>{createdAt}</em>
        <ul>
          <li onClick={handleClick}>
            <LikedButton color={isLiked ? 'red' : 'lightGray'}>
              <i className='fas fa-heart'></i>
            </LikedButton>
            <span>{likedCount}</span>
          </li>
          <li>
            <i className='far fa-comment-alt'></i>
            <span>{replyCount}</span>
          </li>
          <li>
            <div
              data-href={`https://icd-lovat.now.sh/work/${id}`}
              data-layout='button_count'
              data-size='small'
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}%2F&amp;src=sdkpreparse`}
                className='fb-xfbml-parse-ignore'
              >
                <i className='fab fa-facebook-square'></i>
                <span>{sharedCount}</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </StyledItem>
  );
});

export default MemoizeItem;
