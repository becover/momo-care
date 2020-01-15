import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import main_visual_1 from "../asset/img/main_visual_1.jpg";
import main_visual_2 from "../asset/img/main_visual_2.jpg";
import main_visual_txt from "../asset/img/main_vs_txt.png";
import main_cont1_bg from "../asset/img/main_cont1_bg.png";

const Main = () => {
  const mainVisualListStyle1 = {
    backgroundImage: `url(${main_visual_1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  const mainVisualListStyle2 = {
    backgroundImage: `url(${main_visual_2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
  return (
    <>
      <div class="main_visual">
        <div class="main_vs_list">
          <ul class="slides">
            <li style={mainVisualListStyle1}>
              <div class="main_vs_txt">
                <img
                  src={main_visual_txt}
                  alt="MOMO CARE 만의 노하우가 담긴 완벽 홈케어로 여러분의 가정에 깨끗함을 더하겠습니다"
                />
                <div class="btn_area">
                  <Link to="/reservation/form">온라인 예약</Link>
                </div>
              </div>
            </li>
            {/*}
            <li style={mainVisualListStyle2} class="end">
              <div class="main_vs_txt">
                <p>
                  지금은 모든 업무가 종료되어 상담이 어려우니
                  <br />
                  온라인 예약문의를 통해 상담신청 남겨주시기 바랍니다
                </p>
                <div class="btn_area">
                  <Link to="/reservation/form">온라인 예약</Link>
                </div>
              </div>
            </li>
            */}
          </ul>
        </div>
      </div>

      <div class="main_container">
        <div class="main_cont_1">
          <h1 class="title_style_1">서비스안내</h1>
          <ul class="clfx">
            <li class="bg_1">
              <Link to="#">
                <img src={main_cont1_bg} alt="" class="bg" />
              </Link>
              <div class="txt_area">
                <Link to="#">
                  <span class="ko">에어컨 케어</span>
                  <span class="en">A I R C O N D I T I O N E R C A R E</span>
                </Link>
              </div>
            </li>
            <li class="bg_2">
              <Link to="#">
                <img src={main_cont1_bg} alt="" class="bg" />
              </Link>
              <div class="txt_area">
                <Link to="#">
                  <span class="ko">세탁기 케어</span>
                  <span class="en">W A S H I N G M A C H I N E C A R E</span>
                </Link>
              </div>
            </li>
            <li class="bg_3">
              <Link to="#">
                <img src={main_cont1_bg} alt="" class="bg" />
              </Link>
              <div class="txt_area">
                <Link to="#">
                  <span class="ko">매트리스 케어</span>
                  <span class="en">M A T T R E S S C A R E</span>
                </Link>
              </div>
            </li>
            <li class="bg_4">
              <Link to="#">
                <img src={main_cont1_bg} alt="" class="bg" />
              </Link>
              <div class="txt_area">
                <Link to="#">
                  <span class="ko">후드 케어</span>
                  <span class="en"> H O O D C A R E</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div class="main_cont_2">
          <h1 class="title_style_1">MOMO CARE만의 특별함</h1>
          <ul class="clfx">
            <li>
              <div class="icon_1">
                전문 기술과 장비를 통한
                <br />
                체계적인 관리 서비스
              </div>
            </li>
            <li>
              <div class="icon_2">
                출장비 무료 서비스를 통한
                <br />
                합리적인 가격 정찰제
              </div>
            </li>
            <li>
              <div class="icon_3">
                전국 직영점 운영을 통한
                <br />
                서비스 네트워크 구축
              </div>
            </li>
            <li>
              <div class="icon_4">
                전문 가전·침구 케어 매니저를 통한
                <br />
                높은 품질의 서비스 제공
              </div>
            </li>
            <li>
              <div class="icon_5">
                3개월 무료 A/S를 통한
                <br />
                고객만족도 향상
              </div>
            </li>
            <li>
              <div class="icon_6">
                다년간 축적된 경험과 노하우를 통한
                <br />
                앞선 기술력 확보
              </div>
            </li>
          </ul>
        </div>

        <div class="main_cont_3_bg">
          <div class="main_cont_3">
            <h1 class="title_style_1">서비스사례</h1>

            <div class="main_service_rolling">
              <ul class="slides clfx bxslider">
                <li>
                  <div class="img_area">
                    <Link to="#">
                      <img src="../img/main_img_5.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="txt_area">
                    <Link to="#">
                      <span class="title">
                        여름맞이 준비 필수는 에어컨청소1
                      </span>
                      에어컨은 원래 그 형태자체가 곰팡이가 생기기 쉬운 기기래요.
                      <br />
                      차가운 바람을 만들어내며 습기가 기기 안으로 차기
                      때문인데요,
                      <br />
                      이렇게 청소를 해주고 난 다음에, 에어컨을 사용하고 난 뒤에
                      끄기 전에...
                    </Link>
                  </div>
                </li>
                <li>
                  <div class="img_area">
                    <Link to="#">
                      <img src="../img/main_img_5.jpg" alt="" />
                    </Link>
                  </div>
                  <div class="txt_area">
                    <Link to="#">
                      <span class="title">
                        여름맞이 준비 필수는 에어컨청소2
                      </span>
                      에어컨은 원래 그 형태자체가 곰팡이가 생기기 쉬운 기기래요.
                      <br />
                      차가운 바람을 만들어내며 습기가 기기 안으로 차기
                      때문인데요,
                      <br />
                      이렇게 청소를 해주고 난 다음에, 에어컨을 사용하고 난 뒤에
                      끄기 전에...
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div class="btn_more">
              <Link to="#">자세히 보기</Link>
            </div>
          </div>
        </div>

        <div class="main_online_bg">
          <div class="main_online">
            <h1 class="title_style_1">온라인 견적문의</h1>
            <form action="#" method="post">
              <fieldset>
                <ul class="clfx">
                  <li class="left">
                    <label for="main_online_1">서비스 종류</label>
                    <select name="" id="main_online_1">
                      <option value="#">에어컨케어</option>
                      <option value="#">세탁기케어</option>
                      <option value="#">매트리스케어</option>
                      <option value="#">후드케어</option>
                    </select>
                  </li>
                  <li class="right">
                    <label for="main_online_2">고객명</label>
                    <input type="text" id="main_online_2" />
                  </li>
                  <li class="left icon_calendar">
                    <label for="main_online_3">서비스 날짜</label>
                    <input
                      type="text"
                      id="main_online_3"
                      class="calendar_date"
                    />
                  </li>
                  <li class="right">
                    <label for="main_online_4">연락처</label>
                    <input type="text" id="main_online_4" />
                  </li>
                  <li class="add">
                    <label for="main_online_5">주소</label>
                    <input type="text" id="main_online_5" />
                  </li>
                  <li class="cont">
                    <label for="main_online_6">내용</label>
                    <textarea
                      name=""
                      id="main_online_6"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </li>
                </ul>
                <div class="agree">
                  <input type="checkbox" id="main_online_agree" />
                  <label for="main_online_agree">
                    개인정보 수집 및 이용에 동의합니다
                  </label>
                  <Link to="#">[내용보기]</Link>
                </div>
                <div class="btn_area">
                  <Link to="/contact">견적문의하기</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <div class="main_cs_bg">
          <div class="gray_bg"></div>
          <div class="main_cs_center clfx">
            <div class="left_area">
              <h1>고객센터</h1>
              <div class="tel">1234-5678</div>
              <div class="time">점심시간: 12:00~13:00</div>
            </div>
            <div class="right_area">
              <h1>입금계좌</h1>
              <div class="bank_number">123-4567-890</div>
              <div class="time">모모은행 / 예금주: MOMOCARE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
