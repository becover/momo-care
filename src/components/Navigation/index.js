import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="gnb_open">
        <Link to="#">
          <img src="../img/mobile_gnb_open.png" alt="" />
        </Link>
      </div>

      <div className="gnb_wrap">
        <div className="gnb_logo">
          <Link to="#">
            <img src="../img/mb_logo.png" alt="HS CARE" />
          </Link>
        </div>
        <div className="gnb_close">
          <Link to="#">
            <img src="../img/gnb_close.gif" alt="메뉴닫기" />
          </Link>
        </div>
        <div className="gnb">
          <ul className="clfx">
            <li>
              <Link to="/introduce">MOMO 케어소개</Link>
            </li>
            <li>
              <Link to="/guide">가격안내</Link>
            </li>
            <li>
              <Link to="/contact">견적문의</Link>
            </li>
            <li>
              <Link to="/reservation">예약안내</Link>
            </li>
            <li>
              <Link to="/case">서비스사례</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
