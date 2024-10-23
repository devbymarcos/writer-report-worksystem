"use client";

import React, { ReactNode } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select className={`border rounded px-3 py-2 ${className}`} {...props}>
      {children}
    </select>
  );
};
