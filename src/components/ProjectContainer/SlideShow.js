import React, { useState } from "react";
import uniqid from "uniqid";
import styled from "styled-components";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
const SlideShow = ({ slideImages }) => {
    const [current, setCurrent] = useState(0);
    const length = slideImages.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previuosSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Wrapper>
            <Slider>
                <LeftArrow onClick={() => previuosSlide()}>
                    <ArrowBackIosTwoToneIcon />
                </LeftArrow>
                <RightArrow onClick={() => nextSlide()}>
                    <ArrowForwardIosTwoToneIcon />
                </RightArrow>
                {slideImages.map((slide, index) => {
                    return (
                        // Note: adding key={uniqid()} results in styles not being applied (animation not applied)
                        <ImgContainer activeSlide={index === current}>
                            {index === current && (
                                <Img src={slide} alt="project image" key={uniqid()} />
                            )}
                        </ImgContainer>
                    );
                })}
            </Slider>
        </Wrapper>
    );
};

// slider
const Wrapper = styled.div`
  margin-top: 1em;
  width: 100%;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
`;

// left-arrow
const LeftArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  height: 30px;
  width: 30px;
  background: white;
  opacity: 0.2;
  margin: 5px 10px;
  position: absolute;
  top: calc(50% - 15px);
  left: 3%;
  color: #000;
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

// right-arrow
const RightArrow = styled.div`
  display: flex;
  margin: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  height: 30px;
  width: 30px;
  background: white;
  opacity: 0.2;
  position: absolute;
  top: calc(50% - 15px);
  right: 3%;
  color: #000;
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  display: inline;
  opacity: ${(props) => (props.activeSlide ? "1" : "0")};
  transition: opacity 0.5s ease;
`;
export default SlideShow;
