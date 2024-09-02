import {
    ChevronFirst,
    ChevronLast,
    LogOut,
    Settings,
  } from "lucide-react";
  import { createContext, useContext, useState } from "react";
  import { Link } from "react-router-dom";
  
  const SidebarContext = createContext();
  
  export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    return (
      <SidebarContext.Provider value={{ expanded }}>
        <aside
          className={`h-screen transition-all ${
            expanded ? "w-56" : "w-16"
          }`}
        >
          <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img
                src=""
                className={`overflow-hidden transition-all ${
                  expanded ? "w-24" : "w-0"
                }`}
              />
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>
  
            <ul className="flex-1 px-3">{children}</ul>
  
            <div className="border-t flex flex-col p-3">
              <Link to="/student/settings">
                <SidebarItem icon={<Settings size={20} />} text="Settings" />
              </Link>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="flex items-center w-full text-left"
              >
                <SidebarItem icon={<LogOut size={20} />} text="Logout" alert />
              </button>
            </div>
          </nav>
        </aside>
      </SidebarContext.Provider>
    );
  }
  
  export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
  
    return (
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}
  
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    );
  }