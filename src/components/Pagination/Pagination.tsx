import React, { SetStateAction } from "react";
import { twJoin } from "tailwind-merge";

export interface PaginationItemProps {
  value: string;
  id: string;
}

interface PaginationProps<T> {
  setActiveState: React.Dispatch<SetStateAction<T>>;
  activeState: T;
  items: Array<PaginationItemProps>;
}

const Pagination = <T,>({
  setActiveState,
  activeState,
  items,
}: PaginationProps<T>) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveState(e.target.value as T);
  };

  return (
    <div className="flex flex-col ml-auto w-fit fixed z-30 bottom-20 right-10">
      {items.map((item) => (
        <label
          htmlFor={item.id}
          key={item.id}
          className={twJoin(
            "flex rounded-full size-6 py-2 cursor-pointer flex-center",
            activeState === item.value && "border border-white"
          )}
        >
          <div className="size-2 bg-primary rounded-full" />
          <input
            className="hidden"
            type="radio"
            name="pagination"
            id={item.id}
            checked={activeState === item.value}
            value={item.value}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
};

export default Pagination;
