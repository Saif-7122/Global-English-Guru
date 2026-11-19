"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TRAINERS } from "@/data/site";
import { AudioLines } from "lucide-react";
import { mountPixelField } from "./pixel-field";
import styles from "./launch.module.css";

export default function VoiceStage() {
  const surface = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const field = useRef<ReturnType<typeof mountPixelField>>(undefined);

  useEffect(() => {
    if (!canvas.current || !surface.current) return;
    const animation = mountPixelField(canvas.current, surface.current);
    field.current = animation;
    return () => {
      animation?.dispose();
      field.current = undefined;
    };
  }, []);

  return (
    <div className={styles.voiceStage} ref={surface} data-pixel-stage>
      <Image className={styles.coverPortrait} src={TRAINERS[0].photo} alt="Sajid Ahmed addressing a seminar" fill priority sizes="(max-width: 720px) 94vw, 42vw" />
      <div className={styles.plateCaption}><strong>Sajid Ahmed</strong><span>Founder &amp; lead trainer</span></div>
      <canvas ref={canvas} className={styles.voiceCanvas} data-pixel-field aria-hidden="true" />
      
      <div className={styles.voiceControls}>
        <button type="button" data-pulse-pixels onClick={() => field.current?.pulse()}>
          <AudioLines size={16} aria-hidden="true" /> Pulse waveform
        </button>
      </div>
    </div>
  );
}
