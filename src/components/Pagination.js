import React from "react";
import icon_page_arrow1 from "../asset/img/page_arrow_1.gif";
import icon_page_arrow2 from "../asset/img/page_arrow_2.gif";
import icon_page_arrow3 from "../asset/img/page_arrow_3.gif";
import icon_page_arrow4 from "../asset/img/page_arrow_4.gif";

const Pagination = ({ articlesCount, currentPage, setCurrentPage }) => {
  const range = [];
  if (articlesCount <= 10) {
    return range.push(0);
  }
  for (let i = 0; i < Math.ceil(articlesCount / 10); ++i) {
    range.push(i);
  }
  const first = range[0];
  const last = range[range.length - 1];
  const min = Math.max(0, currentPage - 2);
  const max = Math.min(min + 4, last);

  return (
    <div class="paging_wrap">
      <span class="arrow" onClick={() => setCurrentPage(first)}>
        <img src={icon_page_arrow1} alt="처음으로" />
      </span>
      <span
        class="arrow"
        onClick={() =>
          currentPage === 0
            ? setCurrentPage(first)
            : setCurrentPage(currentPage - 1)
        }
      >
        <img src={icon_page_arrow2} alt="이전" />
      </span>
      {range.map(value => {
        const isCurrent = value === currentPage;
        if (value >= min && value <= max) {
          return (
            <span
              key={value + 1}
              className={isCurrent && "on"}
              onClick={() => setCurrentPage(value)}
            >
              {value + 1}
            </span>
          );
        }
      })}
      <span
        class="arrow"
        onClick={() =>
          currentPage === 49
            ? setCurrentPage(last)
            : setCurrentPage(currentPage + 1)
        }
      >
        <img src={icon_page_arrow3} alt="다음" />
      </span>
      <span class="arrow" onClick={() => setCurrentPage(last)}>
        <img src={icon_page_arrow4} alt="끝페이지" />
      </span>
    </div>
  );
};

export default Pagination;
