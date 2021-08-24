import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap, { TimelineLite, Power3 } from 'gsap';

import HeroImg from '../assets/images/hero.png';
// import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
// import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    position: relative;

    display: none;
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
  .hero__btn {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 20px;
    opacity: 100;
  }
  .hero__heading {
    opacity: 100;
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    z-index: 10;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    opacity: 100;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  let heroRef = useRef(null);
  let heroImage = useRef(null);
  let heroName = useRef(null);
  let heroBtn = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    gsap.to(heroRef, 0, { css: { display: 'flex' } });

    tl.from(heroImage, 1, { y: -100, ease: Power3.easeOut, opacity: 0 });
    tl.from(heroName, 1, { y: -100, ease: Power3.easeOut, opacity: 0 }, '-=.5');
    tl.from(heroBtn, 1, { y: -100, ease: Power3.easeOut, opacity: 0 }, '-=.5');
    // tl.from(
    //   heroName,
    //   1,
    //   {
    //     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    //     y: '-50px',
    //   },
    //   '-=2'
    // );
  });
  return (
    <HeroStyles>
      <div className="hero" ref={(el) => (heroRef = el)}>
        <div className="container">
          <h1 className="hero__heading" ref={(el) => (heroName = el)}>
            <span>Hello, This is</span>
            <span className="hero__name">Zia Syed</span>
          </h1>
          <div className="hero__img" ref={(el) => (heroImage = el)}>
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__btn" ref={(el) => (heroBtn = el)}>
            <a href="./ZiaResume.pdf" className="resume" download>
              Download Resumè
            </a>
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ziasyed-io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
