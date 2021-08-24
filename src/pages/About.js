import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap, { TimelineLite, Power3 } from 'gsap';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 15rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
    opacity: 100;
  }
  .resume__btn {
    display: flex;
    position: relative;
    padding-top: 20px;
    opacity: 100;
  }
  .resume {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gary-1)' : 'black')};
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  let leftText = useRef(null);
  let rightImage = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    // gsap.to(leftText, 0, { css: { opacity: 100 } });
    tl.from(leftText, 1, { y: -100, ease: Power3.easeOut, opacity: 0 });
    tl.from(rightImage, 1, { y: 100, ease: Power3.easeOut, opacity: 0 }, '-=1');
    // tl.from(heroName, 2, { y: -100, ease: Power3.easeOut, opacity: 0 }, '-=1');
    // tl.from(heroBtn, 2, { y: -100, ease: Power3.easeOut, opacity: 0 }, '-=1');
  });
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left" ref={(el) => (leftText = el)}>
              <h2 className="about__heading">Software Engineer</h2>
              <div className="about__info">
                <PText>
                  I have 2 years of experience in Programming & Infrastructure
                  maintenance. Currently, progressing towards a Bachelor's
                  Degree in Software Development at Seneca College. I am also
                  focusing on Cloud architecture and Development automation with
                  certifications.
                  <br /> <br />
                  I started programming since I was in middle school. Through a
                  ton of trial and error, I made the decision to pursue Software
                  Engineering and trying to grow in this space with creative
                  solutions for complex issues.
                  <br />
                  <br />
                  My main interests outside of programming include photography &
                  music. I always had an urge to create art, which made me turn
                  to photography in my free time to express my creativity.
                </PText>
              </div>
              <div className="resume__btn">
                <a href="./ZiaResume.pdf" className="resume" download>
                  Download Resumè
                </a>
              </div>
            </div>
            <div className="right" ref={(el) => (rightImage = el)}>
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience:</h1>

              <AboutInfoItem
                title="2021-Present"
                items={['Operations Consultant at Sephora']}
              />
              <AboutInfoItem
                title="2020-2021"
                items={['Algorithm Developer at Crypto-Arsenal']}
              />
              <AboutInfoItem
                title="2019-2019"
                items={['Automation Technician CO-OP']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education:</h1>
              <AboutInfoItem
                title="2020-Present"
                items={['Seneca College in Toronto, ON']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
