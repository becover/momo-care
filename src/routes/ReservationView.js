import React from "react";
import View from "../components/revervation/View";

const ReservationView = ({ location }) => {
  const { state } = location;
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
      <View state={state} />
    </>
  );
};

export default ReservationView;
