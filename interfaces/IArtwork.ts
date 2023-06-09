import { ReactNode } from "react";

export interface IArtwork {
  image: string | undefined;
  title: string;
  user: string;
  likes: number;
  imageURL: string;
  id: string;
  likesCount: number;
  artist: string;
}


