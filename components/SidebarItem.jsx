import React, { useState } from "react";
import styles from "./SidebarItem.module.css";

const SidebarItem = ({ icon, title, active = false, color }) => {
  const [over, setOver] = useState(false);

  const iconStyle = {
    height: "32px",
    width: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
  };

  const titleStyle = {
    color: `${active ? "#000000" : "#a2a2be"}`,
    fontSize: "16px",
    fontWeight: `${active ? "600" : "500"}`,
    marginLeft: "10px",
    "&:hover": {
      color: "#000000",
    },
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    margin: '0px',
    padding: '0px',
  };

  const iconStyleHover = {
    height: "32px",
    width: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    margin: '0px',
    padding: '0px',
  };
  
  const titleStyleHover = {
    color: "#000000",
    fontSize: "16px",
    fontWeight: "600",
    marginLeft: "10px",
    "&:hover": {
      color: "#000000",
    },
    cursor: "pointer",
    transition: "0.2s ease-in-out",
    margin: '0px',
    padding: '0px',
  };
  
  const sidebarItem = {
    display: "flex",
    flexDdirection: "row",
    alignTitems: "center",
    justifyItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
  }
  
  const sidebarItemActive = {
    display: "flex",
    flexDdirection: "row",
    alignTitems: "center",
    justifyItems: "center",
    borderRight: "5px solid #d22f27",
  }

  return (
    <div
      style={active ? sidebarItemActive : sidebarItem}
      className={styles.sidebar__item}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      <div
        style={over ? iconStyleHover : iconStyle}
        className={styles.icon}
      >
        <div
          style={{
            fontSize: "20px",
            color: `${active || over ? "#d22f27" : "#a2a2be"}`,
          }}
        >
          {icon}
        </div>
      </div>
      <p style={over ? titleStyleHover : titleStyle} className={styles.title}>
        {title}
      </p>
    </div>
  );
};

export default SidebarItem;
