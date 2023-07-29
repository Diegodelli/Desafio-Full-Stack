import { useEffect, useRef } from "react";

const useOutClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const outClick = (event) => {
      const target = event.target;
      if (!ref.current?.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", outClick);

    return () => {
      document.removeEventListener("mousedown", outClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
