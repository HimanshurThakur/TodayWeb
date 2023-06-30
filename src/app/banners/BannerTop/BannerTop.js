import React, {useState} from "react";
import styled from "styled-components";
import "./BannerTop.css";

const Section = styled.div`
  flex: ${(props) => props.flex};
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function page() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="maincontainerBanner">
        <div className="LeftBanner">
          <img
            className="BannerImg"
            src="https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <Section className="CenterBanner" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <ImageWrapper>
        <img
            className="BannerImg"
            src="https://www.kisangates.com/assets/images/blog/5.png"
            alt=""
          />
          {isHovered && (
            <Overlay className="overlay">
            <div className="hover-button">
            <p className="Herosection-p">Marketing</p>
              </div>
            </Overlay>
          )}
        </ImageWrapper>
         
        </Section>
        <Section className="RightBanner" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <ImageWrapper>
        <img
            className="BannerImg"
            src="https://images.pexels.com/photos/1143489/pexels-photo-1143489.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          {isHovered && (
            <Overlay className="overlay">
            <div className="hover-button">
            <p className="Herosection-p">Transportation</p>
              </div>
            </Overlay>
          )}
        </ImageWrapper>
          
        </Section>
      </div>
    </>
  );
}

export default page;
