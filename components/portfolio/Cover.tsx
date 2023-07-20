"use client";
import Image, { StaticImageData } from "next/image";

interface CoverProps {
    styles: string;
    src: StaticImageData;
  }
function Cover({ styles, src }: CoverProps) {
  return (
    <Image
      onContextMenu={e => e.preventDefault()}
      src={src}
      width="800"
      height="800"
      alt="demo"
      className={styles}
    />
  );
}

export default Cover;
