"use client";

import { ListItem, Tooltip } from "@mui/material";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  updatedAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
};

const MovieItem = ({
  id,
  title,
  complete,
  updatedAt,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <Tooltip
      disableFocusListener={!complete}
      disableHoverListener={!complete}
      disableTouchListener={!complete}
      title={`Watched on ${updatedAt.toLocaleDateString()}`}
      placement="right"
    >
      <ListItem className="flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </ListItem>
    </Tooltip>
  );
};

export default MovieItem;
