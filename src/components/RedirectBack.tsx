import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const RedirectBack = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="flex items-center gap-2">
      <ArrowLeft className="w-3.5 h-3.5" />
      <span className="font-medium text-sm text-black">back</span>
    </button>
  );
}

export default RedirectBack