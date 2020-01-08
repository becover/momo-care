import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/introduce">MOMO 케어소개</Link>
      </li>
      <li>
        <Link to="/guide">가격안내</Link>
      </li>
      <li>
        <Link to="/contact">견적문의</Link>
      </li>
      <li>
        <Link to="/reservation">예약안내</Link>
      </li>
      <li>
        <Link to="/case">서비스사례</Link>
      </li>
    </ul>
  );
};

export default Navigation;
