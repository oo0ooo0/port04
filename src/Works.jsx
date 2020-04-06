import React from 'react';
import styled from 'styled-components';
import Item from './components/Item';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

const StyledWorks = styled.main`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: none;
    margin-bottom: 200px;
  }
`;

function Works() {
  const works = useSelector(state => state.works);
  return (
    <StyledWorks>
      <h2 className='title'>Work</h2>
      <h3>최신 패션 뉴스를 전해드립니다.</h3>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {Object.keys(works)
          .reverse()
          .map(key => {
            return <Item key={key} {...works[key]} />;
          })}
      </Masonry>
    </StyledWorks>
  );
}

export default Works;
