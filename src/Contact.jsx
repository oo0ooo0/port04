import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledContact = styled.main`
  height: 65vh;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contactImg {
      display: flex;
      border: 1px solid red;
      width: 40%;
      height: 30%;
      img {
        width: 100%;
        height: 100%;
        flex: none;
      }
    }

    .myform {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      white-space: nowrap;
      h4 {
        font-size: 34px;
      }
      p {
        font-size: 11.5px;
      }
      address {
        margin-top: 15px;
      }
      .sns {
        text-align: center;
      }
    }
  }
`;

function Contact() {
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  });
  return (
    <StyledContact>
      <h2 className='title'>Contact</h2>

      <main className='container'>
        <div className='contactImg'>
          <img src='img/Contact.jpeg' alt='컨택트 이미지'></img>
        </div>
        <div className='myform'>
          <h4>Kwon-jamin</h4>
          <p>Web Publisher. Front-end Developer.</p>
          <address>Gwanak-gu, Seoul, Republic of Korea</address>
          <div className='sns'>
            <a href='mailTo:kkjjajja@gmail.com' target='_blank' rel='noopener noreferrer'>
              Email: kkjjajja@gmail.com
            </a>{' '}
            <br />
            <a href='https://www.instagram.com/oo.0oo_o0' target='_blank' rel='noopener noreferrer'>
              instagram: instagram.com/oo.0oo_o0
            </a>
          </div>
        </div>
      </main>
    </StyledContact>
  );
}

export default Contact;
