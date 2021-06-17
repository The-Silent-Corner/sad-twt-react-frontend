import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../Slices/loggedInSlice";
import { setRightComponent } from "../Slices/menuRightComponentSlice";
import ComponentMappings from "../Components/MenuListComponents/ComponentMappings";

export default function HomepageMenu() {
  const [activeMenuList, setActiveMenuList] = React.useState();
  const dispatch = useDispatch();
  const menuRightComponent = useSelector(state => state.menuRightComponent.value);
  function setActive(e) {
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
   * @param {String} rightComponent
   * @returns {JSX.Element}
   */
  function createMenuListItem(rightComponent) {
    const item = (
      <a
        onClick={(e) => {
          setActive(e);
          dispatch(setRightComponent(rightComponent));
        }}
        className={rightComponent === menuRightComponent ? "is-active" : ""}
      >
        {rightComponent}
      </a>
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
          dispatch(setLoggedIn(false));
        }
        }>Logout</a></li>
      </ul>
    </aside>
  );
}
