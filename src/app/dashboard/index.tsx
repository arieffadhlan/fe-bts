import { Link } from "react-router";

const DashboardPage = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/checklist/create" className="px-4 py-2 rounded-lg font-medium text-sm text-white bg-black">
        Create New Checklist
      </Link>
    </div>
  );
}

export default DashboardPage;