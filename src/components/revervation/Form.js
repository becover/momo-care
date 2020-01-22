import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import icon_home from "../../asset/img/icon_home.png";

const Form = () => {
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [toggleValue, setToggleValue] = useState({
    isClicked: false
  });
  console.log(inputValue);
  const formatDate = date => {
    const today = new Date();
    const thisYear = today.getFullYear();
    let thisMonth = today.getMonth() + 1;
    thisMonth = thisMonth >= 10 ? thisMonth : `0${thisMonth}`;
    let thisDay = today.getDate();
    thisDay = thisDay >= 10 ? thisDay : `0${thisDay}`;

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month >= 10 ? month : `0${month}`;
    let day = date.getDate();
    day = day >= 10 ? day : `0${day}`;

    if (
      parseInt(`${year}${month}${day}`, 10) -
        parseInt(`${thisYear}${thisMonth}${thisDay}`, 10) <
      0
    ) {
      alert("과거일은 예약날짜로 선택할 수 없습니다");
      return "";
    }
    return `${year}-${month}-${day}`;
  };
  const onDateChange = date => {
    setDate(formatDate(date));
  };
  const onValueChange = date => {
    setInputValue(formatDate(date));
    setToggleValue({
      ...toggleValue,
      isClicked: !toggleValue.isClicked
    });
  };
  const onToggleValue = () =>
    setToggleValue({
      ...toggleValue,
      isClicked: !toggleValue.isClicked
    });
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

          <div className="estimate_wrap">
            <form action="#" method="post">
              <ul className="clfx">
                <li className="left w_50">
                  <label htmlFor="estimate_1">서비스 종류</label>
                  <select name="" id="estimate_1">
                    <option value="#">서비스 선택</option>
                  </select>
                </li>
                <li className="right  w_50">
                  <label htmlFor="estimate_2">고객명</label>
                  <input type="text" id="estimate_2" />
                </li>
                <li className="left  w_50 icon_calendar calendar_parents">
                  <label htmlFor="estimate_3">희망 서비스일</label>
                  <input
                    type="text"
                    id="estimate_3"
                    placeholder="날짜 선택"
                    className="calendar_date"
                    value={inputValue}
                    readOnly
                    onClick={onToggleValue}
                  />
                  {toggleValue.isClicked && (
                    <Calendar
                      value={date}
                      onChange={(onDateChange, onValueChange)}
                      className="calendar"
                    />
                  )}
                </li>
                <li className="right  w_50">
                  <label htmlFor="estimate_4">연락처</label>
                  <input
                    type="text"
                    id="estimate_4"
                    placeholder="‘-’없이 기입해주세요"
                  />
                </li>
                <li className="pw">
                  <label htmlFor="estimate_7">비밀번호</label>
                  <input type="password" id="estimate_7" />
                  <span>
                    * 예약접수 확인 시 사용할 비밀번호를 입력해주세요.
                  </span>
                </li>
                <li className="left">
                  <label htmlFor="estimate_5">주소</label>
                  <input type="text" id="estimate_5" />
                </li>
                <li className="left">
                  <label htmlFor="estimate_6">내용</label>
                  <textarea
                    name=""
                    id="estimate_6"
                    cols="30"
                    rows="10"
                  ></textarea>
                </li>
              </ul>
              <p className="agree">
                <input type="checkbox" id="estimate_agree" />
                <label htmlFor="estimate_agree">
                  개인정보 수집 및 이용에 동의합니다.{" "}
                </label>
                <Link to="#"> [내용보기]</Link>
              </p>
            </form>

            <div className="btm_btn_area">
              <Link to="/reservation" className="basic-btn01 btn-gray-bg">
                목록
              </Link>
              <input
                type="submit"
                value="예약하기"
                className="basic-btn01 btn-blue-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
