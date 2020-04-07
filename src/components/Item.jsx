import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTitle } from '../utils/common';

import styled from 'styled-components';
import LikedButton from './LikedButton';

const StyledItem = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;

  padding: 10px 0px;

  .item-image-wrap {
    margin-bottom: 10px;
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
`;

const MemoizeItem = React.memo(function Item({ id, mediaList, text }) {
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
    </StyledItem>
  );
});

export default MemoizeItem;
