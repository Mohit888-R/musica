import Sidebar2 from "./Sidebar2";
import SidebarPagesRoute from "./SidebarPagesRoute";

const Sidebar = () => {
  return (
    <div className="h-screen space-y-2">
      <SidebarPagesRoute />
      <Sidebar2 />
    </div>
  );
};

export default Sidebar;
