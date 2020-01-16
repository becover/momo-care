import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import icon_page_arrow1 from "../asset/img/page_arrow_1.gif";
import icon_page_arrow2 from "../asset/img/page_arrow_2.gif";
import icon_page_arrow3 from "../asset/img/page_arrow_3.gif";
import icon_page_arrow4 from "../asset/img/page_arrow_4.gif";

// const SET_PAGE = "SET_PAGE";
// const mapDispatchToProps = dispatch => ({
//   onSetPage: (page, payload) => dispatch({ type: SET_PAGE, page, payload })
// });

const Pagination = ({ state: props }) => {
  console.log("props:", props);
  const range = [];
  if (props.length <= 10) {
    return range.push(0);
  }
  for (let i = 0; i < Math.ceil(props.length / 10); ++i) {
    range.push(i);
  }

  // const setPage = page => {
  //   if (props.pager) {
  //     props.onSetPage(page, props.pager(page));
  //   } else {
  //     props.onSetPage(page, agent.Articles.all(page));
  //   }
  // };
  return (
    <div class="paging_wrap">
      <Link to="" class="arrow">
        <img src={icon_page_arrow1} alt="처음으로" />
      </Link>
      <Link to="" class="arrow">
        <img src={icon_page_arrow2} alt="이전" />
      </Link>
      {range.map(v => {
        const isCurrent = v === props.cerrentPage;
        const onClick = ev => {
          ev.preventDefault();
        };
        return (
          <a
            className={isCurrent && "on"}
            onClick={onClick}
            key={v.toString()}
            href=""
          >
            {v + 1}
          </a>
        );
      })}
      <Link to="" class="arrow">
        <img src={icon_page_arrow3} alt="다음" />
      </Link>
      <Link to="" class="arrow">
        <img src={icon_page_arrow4} alt="끝페이지" />
      </Link>
    </div>
  );
};

export default Pagination;
