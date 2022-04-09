import React from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar_section}>
        <h3 className={styles.Sidebar__title}>MENU</h3>
        <SidebarItem
          icon={<AiFillHome />}
          title="Home"
          active={true}
          color="d22f27"
        />
        <SidebarItem
          icon={<AiFillHome />}
          title="For you"
          active={false}
          color="d22f27"
        />
        <SidebarItem
          icon={<AiFillHome />}
          title="Content"
          active={false}
          color="d22f27"
        />
        <SidebarItem
          icon={<AiFillHome />}
          title="Admin"
          active={false}
          color="d22f27"
        />
      </div>
    </div>
  );
};

export default Sidebar;
