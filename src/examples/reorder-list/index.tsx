"use client";
import { useEffect, useMemo, useState } from "react";

import { animate, MotionValue, useMotionValue, Reorder } from "framer-motion";
import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/ui/alert";
const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

export function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      className="rounded-lg cursor-move"
      value={item}
      id={item}
      style={{ boxShadow, y }}
    >
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>{item}</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </Reorder.Item>
  );
};
const initialItems = ["Alert 1", "Alert 2", "Alert 3", "Alert 4", "Alert 5"];
export default function ReorderList() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      className="flex  flex-col gap-4"
      axis="y"
      onReorder={setItems}
      values={items}
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
