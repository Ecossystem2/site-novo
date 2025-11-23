import { ReactNode } from "react";

export interface Step {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

export interface ComparisonItem {
  name: string;
  type: 'competitor' | 'us';
}

export interface NavItem {
  label: string;
  href: string;
}
