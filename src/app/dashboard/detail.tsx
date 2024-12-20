import { Link, useParams } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import RedirectBack from "@/components/RedirectBack";
import { getChecklistById } from "@/features/checklist/api";
import { Item } from "@/types/checklist";
import { useEffect, useState } from "react";

const ChecklistDetailPage = () => {
  const [items, setItems] = useState<Item[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getChecklistById(Number(id) as number);
        setItems(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!items) {
    return (
      <div className="flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <RedirectBack />
      <div className="flex items-center justify-between pb-2 border-b border-solid border-gray-300">
        <Link to={`/${id}/create`} className="px-4 py-2 rounded-lg font-medium text-sm text-white bg-black">
          Create Item
        </Link>
      </div>
      {items.length > 0 ? (
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox 
                id={`item-${index}`}
                checked={item.itemCompletionStatus}
              />
              <Link to={`/${id}/items/${index}`} className="underline">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center font-medium text-base text-black">
          You have 0 item.
        </div>
      )}
    </div>
  );
}

export default ChecklistDetailPage;
