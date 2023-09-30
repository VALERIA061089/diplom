import React from 'react';
import { GREEN, IMAGEPATH } from '../../Constants/basis';
import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo />
      <FooterInform>
        <div>г. Москва, Цветной б-р, 40</div>
        <div>+7 495 771 21 11</div>
        <div>info@skan.ru</div>
        <br></br>
        <div>Copyright. 2023</div>
      </FooterInform>
    </FooterContainer>
  )
}
const FooterInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #FFFFFF;
`
const FooterLogo = styled.div`
  width: 111px;
  height: 93px;
  background-image: url(${IMAGEPATH + "WhiteLogoSmall.svg"});
`
const FooterContainer = styled.footer`
  padding-left: 60px;
  padding-right: 45px;
  height: 137px;
  background-color: ${GREEN};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
  }

`
export default Footer