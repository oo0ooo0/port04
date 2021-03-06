import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body,
div,
ul,
li,
dl,
dt,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
fieldset,
legend,
p,
select,
table,
span,
th,
td,
tr,
textarea,
button,
form,
img,
section,
svg,
text,
figure {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

/* link reset */
a {
  color: #1d1e21;
  text-decoration: none;
}

a:hover {
  color: #1d1e21;
}


/* title reset  */
h1 {
  font: normal 900 48px/48px 'Lato';
  color: #1d1e21;
}

h2 {
  font: normal 900 32px/48px 'Lato';
  color: #1d1e21;
  border-bottom: 1px solid lightGray;

}

h3 {
  font: normal 500 14px/42px 'Lato';
  color: #1d1e21;
}

h4 {
  font: normal 900 24px/34px 'Lato';
  color: #1d1e21;
}

p {
  font: normal 400 15px/22px 'Lato';
  color: #1d1e21;
}

/* font reset */
body {
  font: normal 400 12px/1.5 'Lato';
}

 /* container */
.container{
padding: 50px 0px;
}

/* font style reset */
address {
  font-style: normal;
}

/* Bullet symbol set*/
dl,
ul,
li,
ol,
menu {
  list-style: none;
}

/* BORDER RESET  */
img,
fieldset {
  border: 0 none;
}

/* btn reset  */
button {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  display: block;
  }
  a {
button.btn {
        margin-top: 30px;
       
          padding: 2px 5px;
          font-size: 15px;
          border: 1px solid lightgray;
          border-radius: 5px;
        }
      }

/* IR effect */
.ir_pm {
  display: block;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
}

/* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
.ir_wa {
  display: block;
  overflow: hidden;
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
}

/* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
.ir_su {
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
}

 
/* margin, padding */
.mt10 {
  margin-top: 10px !important;
}

.mt15 {
  margin-top: 15px !important;
}

.mt20 {
  margin-top: 20px !important;
}

.mt25 {
  margin-top: 25px !important;
}

.mt30 {
  margin-top: 30px !important;
}

.mt35 {
  margin-top: 35px !important;
}

.mt40 {
  margin-top: 40px !important;
}

.mt45 {
  margin-top: 45px !important;
}

.mt50 {
  margin-top: 50px !important;
}

/* clearfix */
.clearfix,
.clearfix::after,
.clearfix::before {
  content: '';
  clear: both;
  display: block;
}
`;

export default GlobalStyle;
