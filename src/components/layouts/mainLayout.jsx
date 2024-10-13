import {
  LayoutDashboard,
  Layers,
  UserPlus,
   History,
  BookOpen,
  Blend,
  CandlestickChart,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex h-screen font-mainFont">
      <Sidebar>
        <Link to="/">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active={currentPath === "/dashboard"}
          />
        </Link>
        <Link to="/vehicle-registration">
          <SidebarItem
            icon={<Layers size={20} />}
            text="Vehicle Registration"
            active={currentPath === "/vehicle-registration"}
          />
        </Link>
        <Link to="/job-allocation">
          <SidebarItem
            icon={<UserPlus />}
            text="Job Allocation"
            active={currentPath === "/job-allocation"}
          />
        </Link>
        <Link to="/quotation-management">
          <SidebarItem
            icon={<History />}
            text="Quotation Management"
            active={currentPath === "/quotation-management"}
          />
        </Link>
        <Link to="/invoicing-and-payment">
          <SidebarItem
            icon={<BookOpen size={20} />}
            text="Invoicing and Payment"
            active={currentPath === "/invoicing-and-payment"}
          />
        </Link>
        <Link to="/workshop-scheduling">
          <SidebarItem
            icon={<Blend />}
            text="Workshop Scheduling"
            active={currentPath === "/workshop-scheduling"}
          />
        </Link>
        <Link to="/vehicle-tracking">
          <SidebarItem
            icon={<CandlestickChart />}
            text="Vehicle Tracking"
            active={currentPath === "/vehicle-tracking"}
          />
        </Link>
      </Sidebar>
      <div className="flex flex-col flex-1">
        <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
          <div className="px-4 mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 hidden max-w-xs mr-auto lg:block">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    placeholder="Search Workshop Portal..."
                  />
                </div>
              </div>
              <div className="flex items-center ml-auto space-x-6">
                <button
                  type="button"
                  className="flex items-center max-w-xs rounded-full "
                >
                  <img
                    className="object-cover bg-gray-300 rounded-full w-9 h-9"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male.png"
                    alt="profile here"
                  />
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 p-4 mt-16 lg:mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;