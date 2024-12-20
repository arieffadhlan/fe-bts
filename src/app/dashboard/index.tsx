import { Link } from "react-router";
import { Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

import { Checklist } from "@/types/checklist";

import { Checkbox } from "@/components/ui/checkbox";
import { deleteChecklist, getChecklist } from "@/features/checklist/api";

const ChecklistPage = () => {
  const [checklist, setChecklist] = useState<Checklist[]>([]);

  const fetchData = async () => {
    try {
      const response = await getChecklist();
      setChecklist(response.data)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeChecklist = async (id: number) => {
    await deleteChecklist(id);
    fetchData();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2 border-b border-solid border-gray-300">
        <h1 className="font-semibold text-xl text-black">All Checklist</h1>
        <Link to="/create" className="px-4 py-2 rounded-lg font-medium text-sm text-white bg-black">
          Create Checklist
        </Link>
      </div>
      {checklist && checklist.length > 0 ? (
        <div className="flex flex-wrap gap-5">
          {checklist.map((note, index) => (
            <div key={index} className="relative min-w-60 min-h-28 border border-solid border-gray-300 rounded-md bg-white transition-shadow duration-300 ease hover:shadow">
              <div className="block px-4 py-3 h-full">
                <div className="font-semibold text-base text-black">{note.name}</div>
                {note.items ? (
                  <div className="mt-4 space-y-3">
                    {note.items.map((item, index) => (              
                      <div key={index} className="flex items-center gap-2">
                        <Checkbox id={`item-${index}`} checked={item.itemCompletionStatus} />
                        <label htmlFor={`item-${index}`} className="font-medium text-sm leading-none">{item.name}</label>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <button onClick={() => removeChecklist(note.id)} className="absolute z-10 right-0 bottom-0 px-4 py-3 cursor-pointer">
                <Trash2Icon className="stroke-[1.5px] w-4 h-4 mt-4 text-black" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center font-semibold text-base text-black">
          You have 0 checklist.
        </div>
      )}
    </div>
  );
}

export default ChecklistPage;