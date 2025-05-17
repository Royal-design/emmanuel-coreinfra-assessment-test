import { items } from "@/Layout/DashboardLayout/DashboardSidebar";
import { SearchField } from "./SearchField";
import { Notification } from "./ui/icons/Notification";
import { UserProfile } from "./ui/icons/UserProfile";
import { Dashboard } from "./ui/icons/Dashboard";
import { useLocation } from "react-router-dom";

export const dashbord = {
  title: "Dashboard",
  url: "dashboard",
  icon: Dashboard
};
export const Navbar: React.FC = () => {
  const location = useLocation();

  const currentItem =
    items.find((item) => location.pathname.includes(item.url)) || dashbord;

  const IconComponent = currentItem.icon as React.FC<{ color?: string }>;
  return (
    <header className="w-full sticky top-0 px-5 py-2 bg-background-default z-10 border-b border-border-primary-gray">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center">
          {IconComponent && <IconComponent color="#014DAF" />}
          <span className="text-secondary text-xs">{currentItem.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SearchField />
          </div>
          <div className="">
            <Notification />
          </div>
          <div className="bg-gray-100 border rounded-full border-[#F2F4F7] p-[6.4px]">
            <UserProfile />
          </div>
        </div>
      </nav>
      <div className="md:hidden mt-1">
        <SearchField />
      </div>
    </header>
  );
};
