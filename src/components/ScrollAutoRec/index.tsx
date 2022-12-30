import { useEffect, useRef } from "react";

interface iScrollAutoReqProps {
  callback: () => void;
}

export const ScrollAutoReq = ({ callback }: iScrollAutoReqProps) => {
  const autoReqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (autoReqRef.current) {
      intersectionObserver.observe(autoReqRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [autoReqRef]);

  return <div ref={autoReqRef} />;
};
