import { ReactNode, useContext, useRef, useState } from "react";

import Button from "../Button/Button.tsx";
import DreamModal, { DreamModalRef } from "../DreamModal/DreamModal.tsx";

import { DreamsContext } from "../../contexts/DreamsContext.ts";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./Result.module.css";

function Result(): ReactNode {
  const { filteredDreams, removeDream } = useContext(DreamsContext);

  const [editingDream, setEditingDream] = useState<Dream | null>(null);

  const modalRef = useRef<DreamModalRef>(null);

  const editButtonClickHandler = (dream: Dream): void => {
    setEditingDream(dream);
    modalRef.current?.showModal();
  };

  return (
    <>
      <ul className={styles.result}>
        {filteredDreams.map((dream) => (
          <li key={dream.id}>
            <div className={styles.date}>
              {new Date(dream.date).toLocaleDateString("default", {
                day: "numeric",
              })}
              <br />
              {new Date(dream.date).toLocaleDateString("default", {
                month: "short",
              })}
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>
                {dream.vibe === "good" ? "🥰" : "😭"}
                <p>{dream.title}</p>
              </div>
              <div className={styles.actions}>
                <Button
                  variant="ghost"
                  size="small"
                  shape="square"
                  onClick={() => editButtonClickHandler(dream)}
                >
                  <MingcuteEdit2Line />
                </Button>
                <Button
                  color="danger"
                  variant="ghost"
                  size="small"
                  shape="square"
                  onClick={() => removeDream(dream.id)}
                >
                  <MingcuteDelete2Line />
                </Button>
              </div>
              <div className={styles.description}>{dream.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <DreamModal ref={modalRef} editingDream={editingDream ?? undefined} />
    </>
  );
}

export default Result;
