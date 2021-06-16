import React from "react";
import api from "../api";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../Slices/loggedInSlice";
import { setRightComponent } from "../Slices/menuRightComponentSlice";
import ComponentMappings from "../Components/MenuListComponents/ComponentMappings";

export default function HomepageMenu() {
  const [activeMenuList, setActiveMenuList] = React.useState();
  const dispatch = useDispatch();
  function setMenuListActive(e) {
    if(e.target === activeMenuList) return;
    e.target.classList.add("is-active");
    if(activeMenuList) {
      activeMenuList.classList.remove("is-active");
      setActiveMenuList(e.target);
    } else {
      setActiveMenuList(e.target);
    }
  }
  /**
   * @function createMenuListItem
   * @param {String} htmlStr
   * @param {String} rightColumnComponent
   * @returns {JSX.Element}
   */
  function createMenuListItem(rightComponent) {
    const item = (
      <li>
        <a
          onClick={(e) => {
            setMenuListActive(e);
            dispatch(setRightComponent(rightComponent));
          }}
        >
          {rightComponent}
        </a>
      </li>
    );
    return item;
  }

  return (
    <aside className="menu">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        {createMenuListItem(ComponentMappings.dashboard)}
        {createMenuListItem(ComponentMappings.courseSearch)}
        {createMenuListItem(ComponentMappings.appointments)}
      </ul>
      <p className="menu-label">
        Transactions
      </p>
      <ul className="menu-list">
        {createMenuListItem(ComponentMappings.payments)}
        {createMenuListItem(ComponentMappings.transfers)}
        {createMenuListItem(ComponentMappings.balance)}
      </ul>
      <p className="menu-label">
        Courses
      </p>
      <ul className="menu-list">
        {createMenuListItem(ComponentMappings.viewCourse)}
      </ul>
      <p className="menu-label">
        Settings
      </p>
      <ul className="menu-list">
        {createMenuListItem(ComponentMappings.profileSettings)}
        {createMenuListItem(ComponentMappings.linkedChildrenAccounts)}
        {createMenuListItem(ComponentMappings.changePassword)}
        <li><a onClick={async() => {
          localStorage.removeItem("login_iat");
          dispatch(setLoggedIn(false));
        }
        }>Logout</a></li>
      </ul>
    </aside>
  );
}
