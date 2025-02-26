import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

type Variant = "solid" | "outlined";

type Props = ComponentProps<"select"> & {
  variant?: Variant;
  options: SelectOption[];
};

function Select({
  variant = "solid",
  options,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles["select"], styles[variant])}>
      <select {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
