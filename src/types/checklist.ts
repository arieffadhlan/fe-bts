export interface Item {
  id: number;
  name: string;
  itemCompletionStatus: boolean;
}

export interface Checklist {
  id: number
  name: string;
  items: Item[];
  checklistCompletionStatus: boolean
}