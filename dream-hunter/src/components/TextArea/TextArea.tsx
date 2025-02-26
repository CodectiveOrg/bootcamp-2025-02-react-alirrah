import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";

type Props = ComponentProps<"textarea">;

function TextArea({ className, ...otherProps }: Props): ReactNode {
  return (
    <textarea
      className={clsx(styles["text-area"], className)}
      rows={3}
      {...otherProps}
    ></textarea>
  );
}

export default TextArea;
