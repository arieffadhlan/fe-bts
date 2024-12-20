import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router";

import { Button } from "@/components/ui/button";
import RedirectBack from "@/components/RedirectBack";
import { addItem } from "@/features/checklist/api";

const ChecklistCreateItemsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const itemName = formData.get("name") as string;

    if (itemName === "") {
      toast.error("Name required.", { autoClose: 1000 });
      return;
    }

    addItem(Number(id) || 0, itemName);
    event.currentTarget.reset();

    toast.success("Item created!", {
      onClose: () => navigate(`/${id}`, { replace: true }),
      autoClose: 1000
    });
  } 
  
  return (
    <div className="space-y-6">
      <RedirectBack />
      <div className="flex items-center justify-between pb-2 border-b border-solid border-gray-300">
        <h1 className="font-semibold text-xl text-black">Create Item</h1>
      </div>
      <form className="space-y-4 w-full" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium text-sm text-black">Item Name</label>
          <input 
            id="name"
            type="text" 
            name="name" 
            className="w-full px-4 py-2 border border-solid border-gray-300 rounded-md font-normal text-sm text-gray-800 placeholder:text-gray-400" 
            placeholder="Item Name"
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

export default ChecklistCreateItemsPage;