import React from "react";
import { Link } from "react-router-dom";
import icon_home from "../../asset/img/icon_home.png";

const ReservationBorders = ({ articles, articlesCount, currentPage }) => {
  const borderNumber = [];
  for (let i = articlesCount - 10 * currentPage, j = 0; j < 10; i--, j++) {
    borderNumber.push(i);
  }
  return (
    <>
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

        <div class="search_wrap">
          <form action="#" method="post">
            <fieldset>
              <div class="search">
                <input type="text" placeholder="고객명 입력" />
                <input type="button" value="검색" />
              </div>
              <Link to="/reservation/form" class="btn-blue-bg">
                예약하기
              </Link>
            </fieldset>
          </form>
        </div>

        <div class="bbs_list">
          <table>
            <thead>
              <tr>
                <th scope="col" class="no">
                  NO.
                </th>
                <th scope="col">예약문의 내역</th>
                <th scope="col">고객명</th>
                <th scope="col">예약상태</th>
                <th scope="col" class="date">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={articles.slug}>
                  <td>{borderNumber.shift()}</td>
                  <td>{article.title}</td>
                  <td>{article.author.username}</td>
                  <td>예약대기</td>
                  <td>{article.createdAt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div class="popup_wrap">
        <div class="popup_bg"></div>
        <div class="popup">
          <form action="#" method="post">
            <fieldset>
              <p class="txt_1">비밀글 기능으로 보호된 글 입니다</p>
              <p class="txt_2">예약 시 설정하신 비밀번호를 입력하세요</p>
              <div class="pw_f">
                <input type="password" />
              </div>
              <div class="btn_area">
                <input
                  type="submit"
                  value="확인"
                  class="basic-btn01 btn-blue-bg"
                />
                <Link to="" class="basic-btn01 btn-gray-bg popup_close">
                  취소
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReservationBorders;
