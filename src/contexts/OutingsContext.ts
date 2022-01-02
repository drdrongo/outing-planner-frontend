import { createContext, useContext } from "react"
import { Outing } from '../data/outings';


export type GlobalOutings = {
  outings: Outing[];
  getOuting: Function;
}



export const OutingsContext = createContext<GlobalOutings>({
  outings: [], // set a default value
  getOuting: () => {},
})

export const useOutingsContext = () => useContext(OutingsContext)
