import { createContext, useContext } from "react"

interface Outing {
  id: number;
  title: string;
  description: string;
  price: number;
  mood: number;
  category: number;
  image?: string;
}

export type GlobalOutings = {
  outings: Outing[];
  // getOutings: Function;
  // fetchOutings: Function;
  getOuting: Function;
}



export const OutingsContext = createContext<GlobalOutings>({
  outings: [], // set a default value
  // getOutings,
  // fetchOutings,
  getOuting: () => {},
})

export const useOutingsContext = () => useContext(OutingsContext)
