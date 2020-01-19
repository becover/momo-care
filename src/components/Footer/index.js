import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">MOMO CARE</div>
      <ul className="clfx">
        <li>상호명 : MOMOCARE</li>
        <li>주소 : 카카오톡 모여라모여 케어 오픈톡방 </li>
        <li className="w_100">
          고객센터 : 1000-0000 (점심시간 : 12:00~13:00){" "}
        </li>
      </ul>
      <p className="copyright">Copyright © MOMO CARE. All Rights Reserved. </p>
    </div>
  );
};

export default Footer;
