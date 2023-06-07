import React, { SetStateAction } from "react";

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
    <div className="flex flex-col ml-auto w-fit">
      {items.map((item) => (
        <label
          htmlFor={item.id}
          key={item.id}
          className="block w-3 h-3 bg-primary rounded-full cursor-pointer"
        >
          <span></span>
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
