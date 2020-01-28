import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import main_cont3_img from "../asset/img/main_img_5.jpg";

const Slider = () => {
  const [slideObj] = useState([
    {
      id: 1,
      title: "Test중입니다111",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다.",
      img: { main_cont3_img }
    },
    {
      id: 2,
      title: "Test중입니다222",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다.",
      img: { main_cont3_img }
    },
    {
      id: 3,
      title: "Test중입니다333",
      content:
        "슬라이더 테스트중입니다. 모모케어 리뷰게시판 미리보기 슬라이더 테스트중입니다. 두줄이상이 되면 내용이 생략됩니다.",
      img: { main_cont3_img }
    }
  ]);
  console.log(slideObj);
  const [sildeOption] = useState({
    dots: true,
    dotsNumber: slideObj.map(s => ({ ...s })),
    infinite: true,
    arrow: true,
    scroll: 1,
    show: 1,
    speed: 1000
  });

  const Slider = styled.div`
    position: relative;
    .slidesList {
      ul {
        width: 100%;
        overflow: hidden;
      }
      li {
        position: relative;
        padding-left: 420px;
        display: none;
        box-sizing: border-box;
      }
      li:first-child {
        display: block;
      }
      .imgArea {
        position: absolute;
        left: 135px;
        top: 0;
        text-align: center;
        transition: all 0.35s ease-in-out;
        img {
          width: 250px;
          height: 148px;
        }
      }

      .textArea {
        width: 100%;
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
      border: 0 none;
      background: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
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
  return (
    <Slider>
      <Buttons>
        <button className="slideArrow slide-prev">
          <svg>
            <path
              d="M 49 0 L 8 49 L 49 98"
              fill="none"
              stroke="#c2c2c2"
              stroke-width="3"
            />
          </svg>
        </button>
        <button className="slideArrow slide-next">
          <svg>
            <path
              d="M 0 0 L 42 50 L 0 97"
              fill="none"
              stroke="#c2c2c2"
              stroke-width="3"
            />
          </svg>
        </button>
      </Buttons>
      <ul className="slidesList">
        {slideObj.map(slide => (
          <li key={slide.id}>
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
      {sildeOption.dots && (
        <Dots>
          <div>
            {sildeOption.dotsNumber.map(dot => (
              <Link to={dot.id} className="dot" key={dot.id}></Link>
            ))}
          </div>
        </Dots>
      )}
    </Slider>
  );
};

export default Slider;
