/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import main_cont3_img from "../asset/img/main_img_5.jpg";

const Slider = () => {
  const [slideObj, setSlideObj] = useState([
    {
      id: -1,
      title: "Test중입니다333",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다.",
      img: { main_cont3_img },
      left: 0
    },
    {
      id: 1,
      title: "Test중입니다111",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다.",
      img: { main_cont3_img },
      left: 0
    },
    {
      id: 2,
      title: "Test중입니다222",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다.",
      img: { main_cont3_img },
      left: 840
    },
    {
      id: 3,
      title: "Test중입니다333",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다.",
      img: { main_cont3_img },
      left: 1680
    },
    {
      id: 4,
      title: "Test중입니다111",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다.",
      img: { main_cont3_img },
      left: 0
    }
  ]);
  const [sildeOption] = useState({
    dots: true,
    dotsNumber: slideObj.map(s => ({ ...s })),
    infinite: true,
    arrow: true,
    scroll: 1,
    show: 1,
    speed: 1000
  });
  const [counter, setCounter] = useState(1);

  const onClickPrev = () => {
    setCounter(prevCounter => prevCounter - 1);
  };

  const onClickNext = () => {
    setCounter(prevCounter => prevCounter + 1);
  };
  console.log(counter);
  useEffect(() => {
    if (counter <= 0) {
      setCounter(slideObj.length - 2);
    }
    if (counter >= slideObj.length - 1) setCounter(slideObj.length - counter);
  }, [counter, slideObj]);
  //#region
  const Slider = styled.div`
    position: relative;
    overflow: hidden;
    .slidesList {
      width: 840px;
      height: 148px;
      transition: all 0.2s ease-in-out;
      ${counter =>
        !isNaN(counter.children.props.counter) &&
        css`
          & {
            transform: translateX(
              -${parseInt(counter.children.props.counter) * 840}px
            );
          }
        `}
      li {
        width: 840px;
        z-index: 1;
        position: absolute;
        top: 0;
        box-sizing: border-box;
      }
      li .imgArea {
        width: 50%;
        float: left;
        padding-left: 135px;
        text-align: center;
        transition: all 0.35s ease-in-out;
        box-sizing: border-box;
        img {
          width: 250px;
          height: 148px;
        }
      }

      li .textArea {
        width: 50%;
        float: left;
        padding-top: 10px;
        min-height: 148px;
        box-sizing: border-box;
        transition: all 0.35s ease-in-out;
        h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0b2c57;
        }
        span {
          font-size: 1.1em;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.7;
          height: 5em;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  `;
  const Buttons = styled.div`
    button {
      z-index: 100;
      border: 0 none;
      background: none;
      position: absolute;
      top: 50%;
      cursor: pointer;
      svg {
        width: 50px;
        height: 100px;
        color: #c1c1c1;
      }
    }
    button.slide-prev {
      left: -80px;
    }
    button.slide-next {
      right: -80px;
    }
  `;
  const Dots = styled.span`
    div {
      padding-top: 25px;
      text-align: center;
      a {
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 14px;
        background: #ccc;
        margin: 0 5px;
      }
      a:hover,
      a.on {
        background: #666;
      }
    }
  `;
  //#endregion
  return (
    <>
      {sildeOption.arrow && (
        <Buttons>
          <button className="slideArrow slide-prev" onClick={onClickPrev}>
            <svg>
              <path
                d="M 49 0 L 8 49 L 49 98"
                fill="none"
                stroke="#c2c2c2"
                strokeWidth="3"
              />
            </svg>
          </button>
          <button className="slideArrow slide-next" onClick={onClickNext}>
            <svg>
              <path
                d="M 0 0 L 42 50 L 0 97"
                fill="none"
                stroke="#c2c2c2"
                strokeWidth="3"
              />
            </svg>
          </button>
        </Buttons>
      )}
      <Slider>
        <ul className="slidesList" counter={counter}>
          {slideObj.map((slide, idx) => (
            <li key={slide.id} style={{ left: idx * 840 }}>
              <div className="imgArea">
                <Link to="#">
                  <img src={slide.img.main_cont3_img} alt="" />
                </Link>
              </div>
              <div className="textArea">
                <Link to="#">
                  <h3>{slide.title}</h3>
                  <span>{slide.content}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Slider>
      {sildeOption.dots && (
        <Dots>
          <div>
            {sildeOption.dotsNumber.map(dot => (
              <Link to={dot.id} className="dot" key={dot.id}></Link>
            ))}
          </div>
        </Dots>
      )}
    </>
  );
};

export default Slider;
