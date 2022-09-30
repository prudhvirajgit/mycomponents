import "./Titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function TitleBar() {
  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div>
          <label>Campaginlist</label>
        </div>
        <div className="titlebar_top_col2">
          <div className="titlebar_top_col22">
            <BsFillPlusCircleFill className="titlebar_plusIcon" />
            <label>AddCampagin</label>
          </div>
        </div>
      </div>
    </>
  );
}
