import React from "react";
import Borders from "../components/revervation/Borders";
import Pagination from "../components/Pagination";

const ReservationGuide = ({
  articles,
  articlesCount,
  currentPage,
  setCurrentPage
}) => {
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
        <Borders
          articles={articles}
          articlesCount={articlesCount}
          currentPage={currentPage}
        />
        <Pagination
          articlesCount={articlesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default ReservationGuide;
