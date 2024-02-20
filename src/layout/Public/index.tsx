import { Outlet } from "react-router-dom";
import PublicLayoutWrapper from "../../components/wrappers/PublicLayoutWrapper";

const PublicLayout = () => {
  
  return (
    <PublicLayoutWrapper>
      <Outlet />
    </PublicLayoutWrapper>
  )
}

export default PublicLayout;