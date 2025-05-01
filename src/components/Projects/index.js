import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Developed responsive web projects using HTML, CSS, and JavaScript, including travel and booking platforms like GlobalYatra. Focused on clean UI design, user experience, and real-world functionality for learning and portfolio building.        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend' ?
            <ToggleButton active value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend' ?
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
            :
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
          }
          <Divider />
          {toggle === 'Fullstack' ?
            <ToggleButton active value="Fullstack" onClick={() => setToggle('Fullstack')}>Fullstack</ToggleButton>
            :
            <ToggleButton value="Fullstack" onClick={() => setToggle('Fullstack')}>Fullstack</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects