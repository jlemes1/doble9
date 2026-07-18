import type { JSONContent } from '@tiptap/react';

export type Variant = {
  id: string;
  size: string;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  slug: string;
  team: string;
  league: string;
  price: number;
  description: JSONContent;
  created_at: string;
  images: string[];
  variants: Variant[];
};
