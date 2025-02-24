import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactNode;
};

function TextInput({ suffixIcon, className, ...otherProps }: Props): ReactNode {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input type="text" {...otherProps} />
      {suffixIcon && <div className={styles.suffix}>{suffixIcon}</div>}
    </div>
  );
}

export default TextInput;
