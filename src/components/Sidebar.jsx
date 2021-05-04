import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import SidebarOptions from "./SidebarOptions.jsx";
import InboxIcon from "@material-ui/icons/Inbox";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Redactar
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Recibidos"
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Destacados" number={54} />
      <SidebarOptions Icon={AccessTimeIcon} title="Pospuestos" number={54} />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title="Importantes"
        number={54}
      />
      <SidebarOptions Icon={NearMeIcon} title="Enviados" number={54} />
      <SidebarOptions Icon={NoteIcon} title="Borradores" number={54} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
