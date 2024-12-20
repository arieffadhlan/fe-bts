import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

import { Button } from "@/components/ui/button";
import RedirectBack from "@/components/RedirectBack";
import { addChecklist } from "@/features/checklist/api";

const CreateChecklistPage: React.FC = () => {
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;

    if (name === "") {
      toast.error("Name required.", { autoClose: 1000 });
      return;
    }

    addChecklist(name)
    event.currentTarget.reset();

    toast.success("Checklist created!", {
      onClose: () => navigate("/checklist", { replace: true }),
      autoClose: 1000
    });
  } 
  
  return (
    <div className="space-y-6">
      <RedirectBack />
      <div className="flex items-center justify-between pb-2 border-b border-solid border-gray-300">
        <h1 className="font-semibold text-xl text-black">Create Checklist</h1>
      </div>
      <form className="space-y-4 w-full" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium text-sm text-black">Checklist Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            className="w-full px-4 py-2 border border-solid border-gray-300 rounded-md font-normal text-sm text-gray-800 placeholder:text-gray-400" 
            placeholder="Checklist Title"
            autoFocus 
          />
        </div>
        <Button type="submit" className="w-full text-white bg-black">
          Submit
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateChecklistPage;