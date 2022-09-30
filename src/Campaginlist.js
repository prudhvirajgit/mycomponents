import "./Components/Campaginlist.css";
import Topbar from "./Components/Topbar";
import Leftbar from "./Components/Leftbar";
import Titlebar from "./Components/Titlebar";
import Filterbar from "./Components/Filterbar";
import Mainlist from "./Components/Mainlist";

export default function Campaginlist() {
  return (
    <>
      <div className="Campaginlist">
        <div className="Campaginlist1">
          <Topbar />
        </div>
        <div className="Campaginlist2">
          <div className="Campaginlist2_left">
            <Leftbar />
          </div>
          <div className="Campaginlist2_right">
            <div className="Campaginlist2_right_content">
              <div className="Campaginlist2_right_content_row1">
                <Titlebar />
              </div>
              <div className="Campaginlist2_right_content_row2">
                <Filterbar />
              </div>
              <div className="Campaginlist2_right_content_row3">
                <Mainlist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
