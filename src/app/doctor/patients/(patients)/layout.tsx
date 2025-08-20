import React, { ReactNode } from "react";

const PatientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default PatientLayout;
