import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import gsap, { TimelineLite, Power3 } from 'gsap';

import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';

const ProjectStyle = styled.div`
  padding: 10rem 0;
  .title {
    display: none;
    opacity: 0;
  }
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    display: none;
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  let proj = useRef(null);
  let items = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  useEffect(() => {
    // gsap.to(proj, 0, { css: { display: 'flex' } });

    tl.from(proj, 1, { y: -100, ease: Power3.easeOut, opacity: 0 });
    tl.from(items, 1, { y: -200, ease: Power3.easeOut, opacity: 0 }, '-=1');
    // tl.from(sBar, 0.5, {  });
  });
  return (
    <>
      <ProjectStyle ref={(el) => (proj = el)}>
        <div className="container">
          <SectionTitle heading="Projects" subheading="Recent" />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems" ref={(el) => (items = el)}>
            {projectsData.map((item) => (
              <a href={item.link} target="_blank" rel="noreferrer">
                <ProjectItem
                  key={item.id}
                  title={item.name}
                  desc={item.desc}
                  img={item.img}
                />
              </a>
            ))}
          </div>
        </div>
      </ProjectStyle>
    </>
  );
}
