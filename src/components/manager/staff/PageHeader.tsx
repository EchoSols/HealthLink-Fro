"use client";

import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function PageHeader({ title, description, buttonText, onButtonClick }: PageHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Button onClick={onButtonClick}>{buttonText}</Button>
    </div>
  );
}
