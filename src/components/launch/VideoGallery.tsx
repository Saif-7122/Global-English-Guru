"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { CLIPS } from "@/data/launch";
import styles from "./launch.module.css";

export default function VideoGallery() {
  const [active, setActive] = useState<(typeof CLIPS)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (active && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [active]);

  function openClip(event: MouseEvent<HTMLAnchorElement>, clip: (typeof CLIPS)[number]) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !dialog.current?.showModal) return;
    event.preventDefault();
    trigger.current = event.currentTarget;
    setActive(clip);
  }

  return (
    <>
      <div className={styles.videoGrid}>
        {CLIPS.map((clip) => (
          <a key={clip.id} href={`/media/${clip.id}.mp4`} className={styles.videoCard} onClick={(event) => openClip(event, clip)}>
            <Image src={`/media/${clip.id}.webp`} alt="" fill sizes="(max-width: 640px) 45vw, 265px" />
            <span className={styles.videoPlay} aria-hidden="true"><Play size={21} fill="currentColor" /></span>
            <span className={styles.videoCaption}><strong>{clip.title}</strong><span>{clip.duration}</span></span>
          </a>
        ))}
      </div>
      <dialog
        ref={dialog}
        className={styles.videoDialog}
        aria-labelledby="active-video-title"
        onClose={() => {
          setActive(null);
          trigger.current?.focus();
        }}
      >
        {active && (
          <div>
            <div className={styles.videoDialogHeader}>
              <h3 id="active-video-title">{active.title}</h3>
              <button type="button" aria-label="Close video" onClick={() => dialog.current?.close()}><X size={22} /></button>
            </div>
            <video
              controls
              playsInline
              autoPlay
              preload="metadata"
              src={`/media/${active.id}.mp4`}
              poster={`/media/${active.id}.webp`}
              aria-label={active.title}
            >
              <track kind="captions" src={`/media/${active.id}.vtt`} srcLang="en" label="English" />
              <a href={`/media/${active.id}.mp4`}>Open video file</a>
            </video>
          </div>
        )}
      </dialog>
    </>
  );
}
