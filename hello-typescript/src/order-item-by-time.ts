export interface Item {
  [key: string]: unknown,

  created_at: string;
  modified_at?: string;
}

export default function OrderItemByTime(items: Item[]): Item[] {
  let orderedItems: Item[] = { ...items };

  for (let i = 0; i < orderedItems.length; i++) {
    for (let j = 0; j < orderedItems.length - i - 1; j++) {
      const firstItem = new Date(orderedItems[j].modified_at ?? orderedItems[j].created_at).getTime();
      const secondItem = new Date(orderedItems[j + 1].modified_at ?? orderedItems[j + 1].created_at).getTime();

      if (firstItem < secondItem) {
        const temp = orderedItems[j];
        orderedItems[j] = orderedItems[j + 1];
        orderedItems[j + 1] = temp;
      }
    }
  }

  return orderedItems;
}