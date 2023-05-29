import { Atkinson_Hyperlegible, Pathway_Extreme } from "next/font/google";

export const title_font = Pathway_Extreme({
  subsets: ["latin"],
});

export const body_font = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});
