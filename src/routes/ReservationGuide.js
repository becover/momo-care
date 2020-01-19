import React from "react";
import Borders from "../components/revervation/Borders";
import Pagination from "../components/Pagination";

const ReservationGuide = ({
  state,
  articlesCount,
  currentPage,
  setCurrentPage,
  setAuthor,
  location,
  match,
  history
}) => {
  return (
    <>
      <div className="sub_visual_wrap">
        <div className="sub_visual sub_visual_5">
          <div className="sub_vs_txt">
            <span className="title">Home Start Care</span>
            <p>
              고객님의 가정에 깨끗함을 제공하는 홈케어 전문업체 MOMO케어 입니다
            </p>
          </div>
        </div>
      </div>
      <div className="sub_container">
        <Borders
          state={state}
          articlesCount={articlesCount}
          currentPage={currentPage}
          setAuthor={setAuthor}
          location={location}
          match={match}
          history={history}
        />
        <Pagination
          articlesCount={articlesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setAuthor={setAuthor}
        />
      </div>
    </>
  );
};

export default ReservationGuide;
