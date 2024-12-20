import { NavLink } from "react-router";

const links = [
  { url: "/", name: "Dashboard" },
];

const DashboardNavbar = () => {
  return (
    <nav className="border-b border-solid border-gray-300">
      <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto px-6 py-4">
        <div className="font-medium text-sm">User</div>
        <div className="flex items-center gap-4">
          {links.map((link, linkIndex) => (
            <NavLink 
              to={link.url} 
              key={linkIndex}
              className={({ isActive }) => (isActive ? 'underline' : 'hover:underline')}
            >
              <span className="font-medium text-sm text-black">
                {link.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;