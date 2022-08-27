import React from 'react';
import styled from 'styled-components';
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          nobis! Dolores quas laudantium iusto nihil neque quisquam, culpa autem
          suscipit.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: top;
  height: calc(100vh - 70px);
  &:before {
    z-index: -1;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    /* background-position: top; */
    opacity: 0.7;
    background-repeat: no-repeat;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  padding: 0 30px;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 9px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
