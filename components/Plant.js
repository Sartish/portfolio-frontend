import plant from "../assets/plant.svg";
import Image from "next/image";
import styled from "styled-components";

const Plant = () => {
  return (
    <PlantWrapper>
      <PlantContainer>
        <Image src={plant} />
      </PlantContainer>
      <Quote>I am a growing developer.</Quote>
    </PlantWrapper>
  );
};

export default Plant;

const PlantWrapper = styled.div`
  width: 100%;
  margin-top: -350px;
  margin-bottom: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

const PlantContainer = styled.div`
  width: 150px;
`;

const Quote = styled.div`
  width: 300px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  line-height: 20px;
  margin-left: 0;
  margin-top: -180px;
  margin-right: 100px;
  transform-origin: 0 0;
  transform: rotate(-9deg);
`;
