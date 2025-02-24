import { ReactNode } from "react";

import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./Result.module.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: "School 1",
    description: "Lorem ipsum dolor sit amet,",
    date: new Date(2025, 11, 5),
    vibe: "good",
  },

  {
    id: "2",
    title: "School 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde.",
    date: new Date(2025, 9, 29),
    vibe: "good",
  },
  {
    id: "3",
    title: "School 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: new Date(2025, 7, 14),
    vibe: "bad",
  },
];

function Result(): ReactNode {
  return (
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.id} className={styles[dream.vibe]}>
          <div className={styles.date}>
            {dream.date.toLocaleDateString("default", { day: "numeric" })}
            <br />
            {dream.date.toLocaleDateString("default", { month: "short" })}
          </div>
          <div className={styles.detail}>
            <p className={styles.title}>{dream.title}</p>
            <div className={styles.actions}>
              <Button variant="ghost" size="small" shape="square">
                <MingcuteEdit2Line />
              </Button>
              <Button
                color="danger"
                variant="ghost"
                size="small"
                shape="square"
              >
                <MingcuteDelete2Line />
              </Button>
            </div>
            <div className={styles.description}>{dream.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
