import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.main`
  main {
    display: flex;
    justify-content: space-between;

    .name-wrap {
      text-align: center;
      width: 20%;
      text-align: left;
      .name {
        font-size: 30px;
      }
      small {
        font-size: 13px;
        white-space: nowrap;
      }
    }
    .textWrap {
      width: 70%;
      text-align: left;
      padding: 0px 20px;

      p {
        font-size: 18px;
        margin-bottom: 20px;
      }
      ul {
        width: 100%;
        font-size: 15px;
        margin-top: 10px;
        li {
          width: 100%;
        }
        .work,
        .edu {
          display: inline-block;
          margin-bottom: 30px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    main {
      display: block;
      .name-wrap {
        padding: 30px 0px 30px 0px;
        text-align: center;
        width: 100%;
      }
      .textWrap {
        /* padding-top: 50px; */
        border-top: 0px solid lightGray;
        border-bottom: 0px solid lightGray;
        width: 100%;
        text-align: center;
        button {
          width: 100%;
        }
      }
    }
  }
`;

function About() {
  return (
    <StyledAbout>
      <h2 className='title'>About</h2>

      <main className='container'>
        <div className='name-wrap'>
          <h3 className='name'>
            <strong>KWON_JAMIN.</strong>
          </h3>
          <small>Web_Publisher. Front_end_Developer.</small>
        </div>

        <div className='textWrap'>
          <ul>
            <li className='work'>
              <strong>Work Experience</strong>
              <ul>
                <li>
                  PYORANG / 프로덕션디자이너 <br />
                  2019 02 - 2019 11, 경기. 안양
                  <br />
                  예술 창작 교육 단체 표랑의 인쇄물, 웹 홍보물, 활동에 필요한 교구 등을 제작.
                </li>
                <li>
                  서울예술대학교 / 영상학부 조교 <br />
                  2018 01 - 2019 02 , 경기. 안산 <br />
                  영상학부 디지털아트전공 기자재 관리 및 전시 지원
                </li>
                <li>
                  스마일게이트. 아시아문화의 전당 / 코딩교육 강사 <br />
                  스마일게이트 보조강사 2017 10 - 2017 11, 경기. 분당 <br />
                  아시아문화의 전당 주강사 2018 07 - 2018 11, 전북. 광주 <br />
                  Scratch, Arduino, Processing 을 이용한 초등생 코딩교육
                </li>
              </ul>
            </li>
            <li className='edu'>
              <strong>EDUCATION. LICENSE</strong>
              <ul>
                <li>세종IT직업전문학교 / 반응형웹디자인. 퍼블리싱 과정 (2019.12 수료)</li>
                <li>
                  웹디자인 기능사 / 관련부처: 산업통상자원부 시행기관: 한국산업인력공단 2019 12
                </li>
                <li>GQT 그래픽기술자격 1급 /시행기관: 한국생산성본부 2019 09</li>
                <li>Coding Specialist 1급 / 시행기관: YBMIT 2017 06</li>
              </ul>
            </li>
            <li className='skill'>
              <strong>Experience SKILL</strong>
              <ul>
                <li>
                  HTML CSS Javascript <br />
                  React(Create React App) Redux
                </li>
                <li>
                  GitHub Desktop (commit push pull) <br />
                  Illustrator Photoshop
                </li>
                <li>GQT 그래픽기술자격 1급 /시행기관: 한국생산성본부 2019 09</li>
                <li>Coding Specialist 1급 / 시행기관: YBMIT 2017 06</li>
              </ul>
            </li>
          </ul>
          <button className='btn'>
            <a href='https://drive.google.com/open?id=19TLC0y5zWTlCRB5JyFohlHt7ybjhRtS5'>
              Resume link
            </a>
          </button>
        </div>
      </main>
    </StyledAbout>
  );
}

export default About;
