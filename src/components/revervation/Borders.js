import React from "react";
import { Link } from "react-router-dom";

const Borders = () => {
  return (
    <>
      <div class="sub_visual_wrap">
        <div class="sub_visual sub_visual_5">
          <div class="sub_vs_txt">
            <span class="title">Home Start Care</span>
            <p>
              고객님의 가정에 깨끗함을 제공하는 홈케어 전문업체 MOMO케어 입니다
            </p>
          </div>
        </div>
      </div>

      <div class="sub_container">
        <div class="navi clfx">
          <ul class="clfx">
            <li>
              <img src="../../asset/img/icon_home.png" alt="HOME" />
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
                <Link to="sub5_1_write.html" class="btn-blue-bg">
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
                <tr>
                  <td class="no">30</td>
                  <td class="txt">
                    <Link to="" class="icon_lock">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing f-red">예약대기</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">29</td>
                  <td class="txt">
                    <Link to="" class="icon_lock">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing f-red">예약대기</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">28</td>
                  <td class="txt">
                    <Link to="" class="icon_lock">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing f-red">예약대기</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">27</td>
                  <td class="txt">
                    <Link to="" class="icon_lock">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">26</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">25</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">24</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">23</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">22</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
                <tr>
                  <td class="no">21</td>
                  <td class="txt">
                    <Link to="sub5_1_view.html">
                      김00님의 예약문의가 접수되었습니다.
                    </Link>
                  </td>
                  <td class="name">김땡땡</td>
                  <td class="ing">예약완료</td>
                  <td class="date">2017-11-16</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="paging_wrap">
            <Link to="" class="arrow">
              <img src="../img/page_arrow_1.gif" alt="처음으로" />
            </Link>
            <Link to="" class="arrow">
              <img src="../img/page_arrow_2.gif" alt="이전" />
            </Link>
            <Link to="" class="on">
              1
            </Link>
            <Link to="">2</Link>
            <Link to="">3</Link>
            <Link to="">4</Link>
            <Link to="">5</Link>
            <Link to="" class="arrow">
              <img src="../img/page_arrow_3.gif" alt="다음" />
            </Link>
            <Link to="" class="arrow">
              <img src="../img/page_arrow_4.gif" alt="끝페이지" />
            </Link>
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
      </div>
    </>
  );
};

export default Borders;
