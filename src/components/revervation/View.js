import React from "react";
import { Link } from "react-router-dom";
import icon_home from "../../asset/img/icon_home.png";

const View = () => {
  return (
    <>
      <div class="sub_container">
        <div class="navi clfx">
          <ul class="clfx">
            <li>
              <img src={icon_home} alt="HOME" />
            </li>
            <li>예약하기</li>
          </ul>
        </div>

        <div class="sub_cont">
          <h1 class="title_style_2">예약하기</h1>

          <div class="bbs_view">
            <div class="title_area">김00님의 예약문의입니다.</div>

            <div class="bbs_view_cont">
              <div class="date_area">2017-11-16</div>
              예약관련 고객이 남긴 문의 내용 입니다.
              <br />
              예약관련 고객이 남긴 문의 내용 입니다.
              <br />
              예약관련 고객이 남긴 문의 내용 입니다.
            </div>

            <div class="repple_area">
              <h2>댓글목록</h2>
              <div class="repple">
                <div class="top_area clfx">
                  <div class="date">2017-05-18</div>
                  <span class="name">HS케어</span>
                </div>
                <p>
                  댓글입니다! 감사합니다. 댓글입니다! 감사합니다.
                  <br />
                  댓글입니다! 감사합니다.
                </p>
              </div>
            </div>
          </div>

          <div class="btm_btn_area">
            <Link to="/reservation" class="basic-btn01 btn-blue-bg">
              목록
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
