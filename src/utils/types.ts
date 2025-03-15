import { ReactNode } from "react";

export type PackageType = {
    image: string | undefined;
    description: ReactNode;
    _id: string;
    title: string;
    text: string;
    avatar: string;
    price: number;
    night: number;
    name: string;
  }
  