import styled from "styled-components";

const Skills = () => {
  return (
    <>
      <SkillsContainer>Skills</SkillsContainer>
    </>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #fdf5df;
  overflow: auto;
  clip-path: polygon(
    30% 0%,
    30% 0,
    100% 24%,
    100% 100%,
    22% 100%,
    0 100%,
    0 23%
  );
`;
