import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import WorkText from './WorkText';
import Comments from './Comments';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { createTitle } from '../utils/common';
import { useSelector } from 'react-redux';

const FOOTER_HEIGHT = 318;

const StyledWorkDetailWrapper = styled.div`
  position: relative;
  display: flex;

  .media-list-area {
    flex: none;
    margin-left: 4%;
    width: 34%;
    min-height: ${(props) => props.boardHeight}px;

    img {
      width: 100%;
      margin-bottom: -1%;
    }
  }
`;

const BoardArea = styled.div`
  padding-top: 38px;
  border-top: 2px solid #1d1e21;
  width: 56%;
  max-width: 990px;
  flex: none;
  position: ${(props) => (props.isScrolled ? `absolute` : 'fixed')};
  top: ${(props) => (props.isScrolled ? 'inherit' : '230px')};
  bottom: ${(props) => (props.isScrolled ? '0' : 'inherit')};
  left: 40%;
  .board {
    width: 100%;
    span {
      font: normal 900 16px/1 'Lato';
    }
    em {
      font: normal 400 16px/1 'Lato';
    }
    h1 {
      min-height: 60px;
      margin-top: 10px;
      font: normal 900 32px/1.4 'Lato';
    }
    p {
      padding: 20px 0px;
      font: 16px/1.6;
      white-space: pre-wrap;
    }
    strong {
      margin-right: 10px;
    }
  }
`;

function WorkDetail() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const mediaListRef = useRef(null);
  const boardRef = useRef(null);
  const [isScrolled, setScrolled] = useState(false);
  const [boardHeight, setBoardHeight] = useState(0);

  const item = useSelector((state) => state.works[params.id] || null);

  const handleScrollEvent = (event) => {
    if (mediaListRef.current && boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();

      if (document.body.clientHeight - (FOOTER_HEIGHT + boardRect.height) - 230 < window.scrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (mediaListRef.current) {
      window.addEventListener('scroll', handleScrollEvent);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  });

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);

    if (boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();
      setBoardHeight(boardRect.height);
    }
  }, [location.pathname]);

  if (!item) {
    history.push('/');
    return null;
  }
  const { text, mediaList, createdAt, siteSrc } = item;
  console.log(siteSrc);
  return (
    <StyledWorkDetailWrapper boardHeight={boardHeight}>
      <div className='media-list-area' ref={mediaListRef}>
        {mediaList.map((media, index) => {
          return <img key={index} src={media.url} alt='피드이미지'></img>;
        })}
      </div>

      <BoardArea isScrolled={isScrolled} className='board-area' ref={boardRef}>
        <div className='board'>
          <em>{createdAt}</em>
          <h4>{createTitle(text)}</h4>
          <WorkText>{text}</WorkText>
        </div>
        <Comments />
      </BoardArea>
    </StyledWorkDetailWrapper>
  );
}

export default WorkDetail;
