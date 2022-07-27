import { useEffect, useRef } from "react";

const OutsideClick = ({ className, children, onOutsideClick }) => {
  const ref = useRef(null);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  });

  return <div ref={ref}>{children}</div>;
};

export default OutsideClick;
