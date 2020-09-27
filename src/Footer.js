import React from "react";
import "./Footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="footer">
      <span>
        Created By <a href="/"> &nbsp; Ajaj Ahmad </a> &nbsp;|&nbsp;
        <CopyrightIcon />
        &nbsp;2020 All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
