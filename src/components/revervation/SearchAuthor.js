import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const SearchAuthor = ({ setAuthor, match }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  if (match.params.author) {
    setAuthor(match.params.author);
  }
  const onSubmit = e => {
    setAuthor(value);
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="search_wrap">
      <form action="#" method="post" onSubmit={onSubmit}>
        <fieldset>
          <div className="search">
            <input
              type="text"
              placeholder="고객명 입력"
              value={value}
              onChange={onChange}
            />
            {/* <input
              type="submit"
              value="검색"
              onSubmit={() => onSubmit(authors)}
            /> */}
            <Link
              to={{
                pathname: `/reservation/searchUser/${value}`,
                state: `${match.params.author}`
              }}
              className="submit"
              onClick={() => setValue("")}
            >
              검색하기
            </Link>
          </div>
          <Link to="/reservation/form" className="btn-blue-bg">
            예약하기
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchAuthor;
