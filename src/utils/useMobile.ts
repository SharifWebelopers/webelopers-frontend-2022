import { useMediaQuery } from "@mui/material";

function useMobile() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return isMobile;
}

export default useMobile;
