import React from "react";
import { Link } from "react-router-dom";
import icon_home from "../../asset/img/icon_home.png";

const Form = () => {
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

          <div class="estimate_wrap">
            <form action="#" method="post">
              <ul class="clfx">
                <li class="left w_50">
                  <label for="estimate_1">서비스 종류</label>
                  <select name="" id="estimate_1">
                    <option value="#">서비스 선택</option>
                  </select>
                </li>
                <li class="right  w_50">
                  <label for="estimate_2">고객명</label>
                  <input type="text" id="estimate_2" />
                </li>
                <li class="left  w_50 icon_calendar">
                  <label for="estimate_3">희망 서비스일</label>
                  <input
                    type="text"
                    id="estimate_3"
                    placeholder="날짜 선택"
                    class="calendar_date"
                  />
                </li>
                <li class="right  w_50">
                  <label for="estimate_4">연락처</label>
                  <input
                    type="text"
                    id="estimate_4"
                    placeholder="‘-’없이 기입해주세요"
                  />
                </li>
                <li class="pw">
                  <label for="estimate_7">비밀번호</label>
                  <input type="password" id="estimate_7" />
                  <span>
                    * 예약접수 확인 시 사용할 비밀번호를 입력해주세요.
                  </span>
                </li>
                <li class="left">
                  <label for="estimate_5">주소</label>
                  <input type="text" id="estimate_5" />
                </li>
                <li class="left">
                  <label for="estimate_6">내용</label>
                  <textarea
                    name=""
                    id="estimate_6"
                    cols="30"
                    rows="10"
                  ></textarea>
                </li>
              </ul>
              <p class="agree">
                <input type="checkbox" id="estimate_agree" />
                <label for="estimate_agree">
                  개인정보 수집 및 이용에 동의합니다.{" "}
                </label>
                <Link to="#"> [내용보기]</Link>
              </p>
            </form>

            <div class="btm_btn_area">
              <Link to="/reservation" class="basic-btn01 btn-gray-bg">
                목록
              </Link>
              <input
                type="submit"
                value="예약하기"
                class="basic-btn01 btn-blue-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
