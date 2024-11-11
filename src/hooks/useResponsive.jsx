import { useState, useEffect } from "react";

const useResponsive = (breakpoint = 768) => {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isTabletOrDesktop;
};

export default useResponsive;
