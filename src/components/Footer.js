import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const FooterStyle = styled.div`
  .container {
    display: flex;
    gap: 3rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Zia Syed</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
