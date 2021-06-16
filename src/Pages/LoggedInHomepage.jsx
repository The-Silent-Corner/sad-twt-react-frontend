import React from "react";
import Navbar from "../Components/Navbar";
import HomepageMenu from "./HomepageMenu";
import { useSelector } from "react-redux";
import MenuListComponents from "../Components/MenuListComponents";
import ComponentMappings from "../Components/MenuListComponents/ComponentMappings";

export default function LoggedInHomepage() {
  const { menuRightComponent } = useSelector(state => state);
  const [rightComponent, setRightComponent] = React.useState();
  React.useEffect(() => {
    switch(menuRightComponent.value) {
      case ComponentMappings.dashboard: return setRightComponent(MenuListComponents.Dashboard);
      case ComponentMappings.courseSearch: return setRightComponent(MenuListComponents.CourseSearch);
      case ComponentMappings.appointments: return setRightComponent(MenuListComponents.Appointments);
      case ComponentMappings.payments: return setRightComponent(MenuListComponents.Payments);
      case ComponentMappings.transfers: return setRightComponent(MenuListComponents.Transfers);
      case ComponentMappings.balance: return setRightComponent(MenuListComponents.Balance);
      case ComponentMappings.viewCourse: return setRightComponent(MenuListComponents.ViewCourses);
      case ComponentMappings.profileSettings: return setRightComponent(MenuListComponents.ProfileSettings);
      case ComponentMappings.linkedChildrenAccounts: return setRightComponent(MenuListComponents.LinkChildrenAccounts);
      case ComponentMappings.changePassword: return setRightComponent(MenuListComponents.ChangePassword);
    }
  }, [menuRightComponent.value]);
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <HomepageMenu />
          </div>
          <div className="column">
            {rightComponent}
          </div>
        </div>
      </div>
    </>
  );
}