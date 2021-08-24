import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import gsap, { TimelineLite, Power3 } from 'gsap';

import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    margin-top: 10rem;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  let info = useRef(null);
  // let form = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    // gsap.to(proj, 0, { css: { display: 'flex' } });

    tl.from(info, 1, { y: -200, ease: Power3.easeOut, opacity: 0 });
    // tl.from(form, 1, { x: 200, ease: Power3.easeOut, opacity: 0 }, '-=1');
    // tl.from(items, 1, { y: -200, ease: Power3.easeOut, opacity: 0 }, '-=1');
    // tl.from(sBar, 0.5, {  });
  });
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="" />
        <div className="contactSection__wrapper">
          <div className="left" ref={(el) => (info = el)}>
            <ContactInfoItem icon={<MdLocalPhone />} text="+1 647-606-4534" />
            <ContactInfoItem icon={<MdEmail />} text="ziasyed2000@gmail.com" />
            <ContactInfoItem text="Toronto, Canada" />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
