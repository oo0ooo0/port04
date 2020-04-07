import React from 'react';
import styled from 'styled-components';
import Item from './components/Item';
import Masonry from 'react-masonry-css';
import { useSelector } from 'react-redux';

const StyledWorks = styled.main`
  .my-masonry-grid {
    margin-top: 3 0px;
    display: flex;
    margin-left: -20px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: none;
    margin-bottom: 20px;
  }
`;

function Works() {
  const works = useSelector((state) => state.works);
  return (
    <StyledWorks>
      <h2 className='title'>Work</h2>
      <h3>
        <br />
        <br />
      </h3>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {Object.keys(works)
          .reverse()
          .map((key) => {
            return <Item key={key} {...works[key]} />;
          })}
      </Masonry>
    </StyledWorks>
  );
}

export default Works;
