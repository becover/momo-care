import React from "react";
import { Link } from "react-router-dom";
import icon_home from "../../asset/img/icon_home.png";
import SearchAuthor from "./SearchAuthor";

const ReservationBorders = ({
  state: articles,
  articlesCount,
  currentPage,
  setAuthor,
  match
}) => {
  const borderNumber = [];
  if (articlesCount <= 10) {
    for (let i = articlesCount, j = 0; j < 10 && i > 0; i--, j++) {
      borderNumber.push(i);
    }
  } else if (articlesCount > 10) {
    for (
      let i = articlesCount - 10 * currentPage, j = 0;
      j < 10 && i > 0;
      i--, j++
    ) {
      borderNumber.push(i);
    }
  }
  return (
    <>
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

        <SearchAuthor setAuthor={setAuthor} match={match} />

        <div className="bbs_list">
          <table>
            <thead>
              <tr>
                <th scope="col" className="no">
                  NO.
                </th>
                <th scope="col">예약문의 내역</th>
                <th scope="col">고객명</th>
                <th scope="col">예약상태</th>
                <th scope="col" className="date">
                  등록일
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article.number}>
                  <td>{borderNumber.shift()}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/reservation/view/${article.number}`,
                        state: article
                      }}
                    >
                      {article.title}
                    </Link>
                  </td>
                  <td>{article.name}</td>
                  <td>예약대기</td>
                  <td>{article.createDate.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="popup_wrap">
        <div className="popup_bg"></div>
        <div className="popup">
          <form action="#" method="post">
            <fieldset>
              <p className="txt_1">비밀글 기능으로 보호된 글 입니다</p>
              <p className="txt_2">예약 시 설정하신 비밀번호를 입력하세요</p>
              <div className="pw_f">
                <input type="password" />
              </div>
              <div className="btn_area">
                <input
                  type="submit"
                  value="확인"
                  className="basic-btn01 btn-blue-bg"
                />
                <Link to="" className="basic-btn01 btn-gray-bg popup_close">
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
