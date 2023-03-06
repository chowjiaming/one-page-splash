'use client';
import {useEffect, useMemo, useState} from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};
export default function Flag({src, alt}: Props) {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setViewWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewWidth]);

  const flagDimensions = useMemo(() => {
    const fr: number = ((viewWidth - 320) * (72 - 16)) / (2560 - 320) + 16;
    const width = viewWidth / fr;
    const height = width * (2 / 3);
    return {width, height};
  }, [viewWidth]);

  return (
    <Image
      src={src}
      alt={alt}
      width={flagDimensions.width}
      height={flagDimensions.height}
      style={{
        display: 'inline-block',
        marginBottom: -1,
        objectFit: 'cover',
        verticalAlign: 'baseline',
      }}
    />
  );
}
