import React from "react";
import { Checkbox, Icon, IconButton } from "@material-ui/core";
import "./EmailList.css";
import RedoIcon from "@material-ui/icons/Redo";
import MorevertIcon from "@material-ui/icons/MoreVert";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__Setting">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MorevertIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__settingRight">
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
        <IconButton>
          <KeyboardHideIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="emailList__sections"></div>
    </div>
  );
};

export default EmailList;
