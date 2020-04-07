import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.main`
  .aniBox {
    padding: 3vw 0vw 8vw 0vw;
    .ani-text p {
      text-align: center;
      font: bold 13vw/1 'Lato', sans-serif;
      color: whitesmoke;
      animation: text-shadow 0.75s linear infinite;
      p:last-child {
        text-align: right;
      }
    }
  }
  @keyframes text-shadow {
    from,
    19.9% {
      text-shadow: 0 0 #333, 0.1vw 0.1vw #333, 0.2vw 0.2vw #333, 0.3vw 0.3vw #333, 0.4vw 0.4vw #333,
        0.5vw 0.5vw #333, 0.5vw 0.5vw #666, 0.6vw 0.6vw #666, 0.7vw 0.7vw #666, 0.8vw 0.8vw #666,
        0.9vw 0.9vw #666, 1vw 1vw #666, 1vw 1vw #999, 1.1vw 1.1vw #999, 1.2vw 1.2vw #999,
        1.3vw 1.3vw #999, 1.4vw 1.4vw #999, 1.5vw 1.5vw #999, 1.5vw 1.5vw #ccc, 1.6vw 1.6vw #ccc,
        1.7vw 1.7vw #ccc, 1.8vw 1.8vw #ccc, 1.9vw 1.9vw #ccc, 2vw 2vw #ccc, 2vw 2vw #eee,
        2.1vw 2.1vw #eee, 2.2vw 2.2vw #eee, 2.3vw 2.3vw #eee, 2.4vw 2.4vw #eee, 2.5vw 2.5vw #eee,
        2.5vw 2.5vw #333, 2.6vw 2.6vw #333, 2.7vw 2.7vw #333, 2.8vw 2.8vw #333, 2.9vw 2.9vw #333,
        3vw 3vw #333, 3vw 3vw #666, 3.1vw 3.1vw #666, 3.2vw 3.2vw #666, 3.3vw 3.3vw #666,
        3.4vw 3.4vw #666, 3.5vw 3.5vw #666, 3.5vw 3.5vw #999, 3.6vw 3.6vw #999, 3.7vw 3.7vw #999,
        3.8vw 3.8vw #999, 3.9vw 3.9vw #999, 4vw 4vw #999, 4vw 4vw #ccc, 4.1vw 4.1vw #ccc,
        4.2vw 4.2vw #ccc, 4.3vw 4.3vw #ccc, 4.4vw 4.4vw #ccc, 4.5vw 4.5vw #ccc, 4.5vw 4.5vw #eee,
        4.6vw 4.6vw #eee, 4.7vw 4.7vw #eee, 4.8vw 4.8vw #eee, 4.9vw 4.9vw #eee, 5vw 5vw #eee;
    }
    20%,
    39.9% {
      text-shadow: 0 0 #eee, 0.1vw 0.1vw #eee, 0.2vw 0.2vw #eee, 0.3vw 0.3vw #eee, 0.4vw 0.4vw #eee,
        0.5vw 0.5vw #eee, 0.5vw 0.5vw #333, 0.6vw 0.6vw #333, 0.7vw 0.7vw #333, 0.8vw 0.8vw #333,
        0.9vw 0.9vw #333, 1vw 1vw #333, 1vw 1vw #666, 1.1vw 1.1vw #666, 1.2vw 1.2vw #666,
        1.3vw 1.3vw #666, 1.4vw 1.4vw #666, 1.5vw 1.5vw #666, 1.5vw 1.5vw #999, 1.6vw 1.6vw #999,
        1.7vw 1.7vw #999, 1.8vw 1.8vw #999, 1.9vw 1.9vw #999, 2vw 2vw #999, 2vw 2vw #ccc,
        2.1vw 2.1vw #ccc, 2.2vw 2.2vw #ccc, 2.3vw 2.3vw #ccc, 2.4vw 2.4vw #ccc, 2.5vw 2.5vw #ccc,
        2.5vw 2.5vw #eee, 2.6vw 2.6vw #eee, 2.7vw 2.7vw #eee, 2.8vw 2.8vw #eee, 2.9vw 2.9vw #eee,
        3vw 3vw #eee, 3vw 3vw #333, 3.1vw 3.1vw #333, 3.2vw 3.2vw #333, 3.3vw 3.3vw #333,
        3.4vw 3.4vw #333, 3.5vw 3.5vw #333, 3.5vw 3.5vw #666, 3.6vw 3.6vw #666, 3.7vw 3.7vw #666,
        3.8vw 3.8vw #666, 3.9vw 3.9vw #666, 4vw 4vw #666, 4vw 4vw #999, 4.1vw 4.1vw #999,
        4.2vw 4.2vw #999, 4.3vw 4.3vw #999, 4.4vw 4.4vw #999, 4.5vw 4.5vw #999, 4.5vw 4.5vw #ccc,
        4.6vw 4.6vw #ccc, 4.7vw 4.7vw #ccc, 4.8vw 4.8vw #ccc, 4.9vw 4.9vw #ccc, 5vw 5vw #ccc;
    }
    40%,
    59.9% {
      text-shadow: 0 0 #ccc, 0.1vw 0.1vw #ccc, 0.2vw 0.2vw #ccc, 0.3vw 0.3vw #ccc, 0.4vw 0.4vw #ccc,
        0.5vw 0.5vw #ccc, 0.5vw 0.5vw #eee, 0.6vw 0.6vw #eee, 0.7vw 0.7vw #eee, 0.8vw 0.8vw #eee,
        0.9vw 0.9vw #eee, 1vw 1vw #eee, 1vw 1vw #333, 1.1vw 1.1vw #333, 1.2vw 1.2vw #333,
        1.3vw 1.3vw #333, 1.4vw 1.4vw #333, 1.5vw 1.5vw #333, 1.5vw 1.5vw #666, 1.6vw 1.6vw #666,
        1.7vw 1.7vw #666, 1.8vw 1.8vw #666, 1.9vw 1.9vw #666, 2vw 2vw #666, 2vw 2vw #999,
        2.1vw 2.1vw #999, 2.2vw 2.2vw #999, 2.3vw 2.3vw #999, 2.4vw 2.4vw #999, 2.5vw 2.5vw #999,
        2.5vw 2.5vw #ccc, 2.6vw 2.6vw #ccc, 2.7vw 2.7vw #ccc, 2.8vw 2.8vw #ccc, 2.9vw 2.9vw #ccc,
        3vw 3vw #ccc, 3vw 3vw #eee, 3.1vw 3.1vw #eee, 3.2vw 3.2vw #eee, 3.3vw 3.3vw #eee,
        3.4vw 3.4vw #eee, 3.5vw 3.5vw #eee, 3.5vw 3.5vw #333, 3.6vw 3.6vw #333, 3.7vw 3.7vw #333,
        3.8vw 3.8vw #333, 3.9vw 3.9vw #333, 4vw 4vw #333, 4vw 4vw #666, 4.1vw 4.1vw #666,
        4.2vw 4.2vw #666, 4.3vw 4.3vw #666, 4.4vw 4.4vw #666, 4.5vw 4.5vw #666, 4.5vw 4.5vw #999,
        4.6vw 4.6vw #999, 4.7vw 4.7vw #999, 4.8vw 4.8vw #999, 4.9vw 4.9vw #999, 5vw 5vw #999;
    }
    60%,
    79.9% {
      text-shadow: 0 0 #999, 0.1vw 0.1vw #999, 0.2vw 0.2vw #999, 0.3vw 0.3vw #999, 0.4vw 0.4vw #999,
        0.5vw 0.5vw #999, 0.5vw 0.5vw #ccc, 0.6vw 0.6vw #ccc, 0.7vw 0.7vw #ccc, 0.8vw 0.8vw #ccc,
        0.9vw 0.9vw #ccc, 1vw 1vw #ccc, 1vw 1vw #eee, 1.1vw 1.1vw #eee, 1.2vw 1.2vw #eee,
        1.3vw 1.3vw #eee, 1.4vw 1.4vw #eee, 1.5vw 1.5vw #eee, 1.5vw 1.5vw #333, 1.6vw 1.6vw #333,
        1.7vw 1.7vw #333, 1.8vw 1.8vw #333, 1.9vw 1.9vw #333, 2vw 2vw #333, 2vw 2vw #666,
        2.1vw 2.1vw #666, 2.2vw 2.2vw #666, 2.3vw 2.3vw #666, 2.4vw 2.4vw #666, 2.5vw 2.5vw #666,
        2.5vw 2.5vw #999, 2.6vw 2.6vw #999, 2.7vw 2.7vw #999, 2.8vw 2.8vw #999, 2.9vw 2.9vw #999,
        3vw 3vw #999, 3vw 3vw #ccc, 3.1vw 3.1vw #ccc, 3.2vw 3.2vw #ccc, 3.3vw 3.3vw #ccc,
        3.4vw 3.4vw #ccc, 3.5vw 3.5vw #ccc, 3.5vw 3.5vw #eee, 3.6vw 3.6vw #eee, 3.7vw 3.7vw #eee,
        3.8vw 3.8vw #eee, 3.9vw 3.9vw #eee, 4vw 4vw #eee, 4vw 4vw #333, 4.1vw 4.1vw #333,
        4.2vw 4.2vw #333, 4.3vw 4.3vw #333, 4.4vw 4.4vw #333, 4.5vw 4.5vw #333, 4.5vw 4.5vw #666,
        4.6vw 4.6vw #666, 4.7vw 4.7vw #666, 4.8vw 4.8vw #666, 4.9vw 4.9vw #666, 5vw 5vw #666;
    }
    80%,
    to {
      text-shadow: 0 0 #666, 0.1vw 0.1vw #666, 0.2vw 0.2vw #666, 0.3vw 0.3vw #666, 0.4vw 0.4vw #666,
        0.5vw 0.5vw #666, 0.5vw 0.5vw #999, 0.6vw 0.6vw #999, 0.7vw 0.7vw #999, 0.8vw 0.8vw #999,
        0.9vw 0.9vw #999, 1vw 1vw #999, 1vw 1vw #ccc, 1.1vw 1.1vw #ccc, 1.2vw 1.2vw #ccc,
        1.3vw 1.3vw #ccc, 1.4vw 1.4vw #ccc, 1.5vw 1.5vw #ccc, 1.5vw 1.5vw #eee, 1.6vw 1.6vw #eee,
        1.7vw 1.7vw #eee, 1.8vw 1.8vw #eee, 1.9vw 1.9vw #eee, 2vw 2vw #eee, 2vw 2vw #333,
        2.1vw 2.1vw #333, 2.2vw 2.2vw #333, 2.3vw 2.3vw #333, 2.4vw 2.4vw #333, 2.5vw 2.5vw #333,
        2.5vw 2.5vw #666, 2.6vw 2.6vw #666, 2.7vw 2.7vw #666, 2.8vw 2.8vw #666, 2.9vw 2.9vw #666,
        3vw 3vw #666, 3vw 3vw #999, 3.1vw 3.1vw #999, 3.2vw 3.2vw #999, 3.3vw 3.3vw #999,
        3.4vw 3.4vw #999, 3.5vw 3.5vw #999, 3.5vw 3.5vw #ccc, 3.6vw 3.6vw #ccc, 3.7vw 3.7vw #ccc,
        3.8vw 3.8vw #ccc, 3.9vw 3.9vw #ccc, 4vw 4vw #ccc, 4vw 4vw #eee, 4.1vw 4.1vw #eee,
        4.2vw 4.2vw #eee, 4.3vw 4.3vw #eee, 4.4vw 4.4vw #eee, 4.5vw 4.5vw #eee, 4.5vw 4.5vw #333,
        4.6vw 4.6vw #333, 4.7vw 4.7vw #333, 4.8vw 4.8vw #333, 4.9vw 4.9vw #333, 5vw 5vw #333;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <div className='row'>
        <div className='aniBox'>
          <div className='ani-text'>
            <p>PORTFOLIO</p>
            {/* <p>SITE</p> */}
          </div>
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
