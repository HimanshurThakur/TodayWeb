import React, { useState } from "react";
import styled from "styled-components";
import "./Herosection.css";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import centerBanner from "../../../../../public/pics/centerBanner.jpeg";
import leftBanner from "../../../../../public/pics/LeftBanner.jpeg";
import rightdownBanner from "../../../../../public/pics/rightdownBanner.jpeg";
import rightupBanner from "../../../../../public/pics/rightupBanner.jpeg";

const Section = styled.div`
  flex: ${(props) => props.flex};
  border-radius: 8px;
  overflow: hidden;
  height: 70vh;
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
  padding: 0.5rem 0.5rem;
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

export default function Herosection() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="HeroBanner1">
      <div className="leftBanner">
        <Section
          flex={2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImageWrapper>
            <Image className="img" src={leftBanner} alt="Farmer To Farmer" />
            {isHovered && (
              <Overlay className="overlay">
                <div className="hover-button">
                  <p className="Herosection-p">Farmer To Farmer</p>
                  <ButtonContainer>
                    <Button>Sell</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                    <p style={{ color: "white", fontSize: "xx-large" }}>|</p>
                    <Button>Buy</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                  </ButtonContainer>
                </div>
              </Overlay>
            )}
          </ImageWrapper>
        </Section>
      </div>
      <div className="centerBanner">
        <Section
          flex={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImageWrapper>
            <Image className="img" src={centerBanner} alt="Agri Output" />
            {isHovered && (
              <Overlay className="overlay">
                <div className="hover-button">
                  <p className="Herosection-p">Agri Output</p>
                  <ButtonContainer>
                    <Button>Sell</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                    <p style={{ color: "white", fontSize: "xx-large" }}>|</p>
                    <Button>Buy</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                  </ButtonContainer>
                  <br />
                  <ButtonContainer>
                    <Button>Add Packet</Button>
                    <p style={{ color: "white", fontSize: "xx-large" }}>|</p>
                    <Button>Sell Packet</Button>
                  </ButtonContainer>
                </div>
              </Overlay>
            )}
          </ImageWrapper>
        </Section>
      </div>
      <div className="rightBanner">
        <Section
          flex={2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImageWrapper>
            <Image className="img" src={rightupBanner} alt="Agri Input" />
            {isHovered && (
              <Overlay className="overlay">
                <div className="hover-button">
                  <p className="Herosection-p">Agri Input</p>
                  <ButtonContainer>
                    <Button>Sell</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                    <p style={{ color: "white", fontSize: "xx-large" }}>|</p>

                    <Button>Buy</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                  </ButtonContainer>
                </div>
              </Overlay>
            )}
          </ImageWrapper>
        </Section>
        <Section
          flex={2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ImageWrapper>
            <Image className="img" src={rightdownBanner} alt="Rural Product" />
            {isHovered && (
              <Overlay className="overlay">
                <div className="hover-button">
                  <p className="Herosection-p">Rural Product</p>
                  <ButtonContainer>
                    <Button>Sell</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                    <p style={{ color: "white", fontSize: "xx-large" }}>|</p>
                    <Button>Buy</Button>
                    <Button>
                      <SearchIcon />
                    </Button>
                  </ButtonContainer>
                </div>
              </Overlay>
            )}
          </ImageWrapper>
        </Section>
      </div>
    </div>
  );
}
