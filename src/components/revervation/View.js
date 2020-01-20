import React from "react";
import { Link } from "react-router-dom";
import icon_home from "../../asset/img/icon_home.png";

const View = ({ state }) => {
  return (
    <>
      <div className="sub_container">
        <div className="navi clfx">
          <ul className="clfx">
            <li>
              <img src={icon_home} alt="HOME" />
            </li>
            <li>예약하기</li>
          </ul>
        </div>

        <div className="sub_cont">
          <h1 className="title_style_2">예약하기</h1>

          <div className="bbs_view">
            <div className="title_area">{state.title}</div>

            <div className="bbs_view_cont">
              <div className="date_area">{state.createdAt.slice(0, 10)}</div>
              {state.body}
            </div>

            <div className="repple_area">
              <h2>댓글목록</h2>
              <div className="repple">
                <div className="top_area clfx">
                  <div className="date">2017-05-18</div>
                  <span className="name">HS케어</span>
                </div>
                <p>
                  댓글입니다! 감사합니다. 댓글입니다! 감사합니다.
                  <br />
                  댓글입니다! 감사합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="btm_btn_area">
            <Link to="/reservation" className="basic-btn01 btn-blue-bg">
              목록
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
