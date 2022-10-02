import { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface ApplicationShellProps {
  children: ReactNode;
}

export const ApplicationShell: FC<ApplicationShellProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
