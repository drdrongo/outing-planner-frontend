// import Outings from "../routes/outings";

interface Outing {
  id: number;
  title: string;
  description: string;
  price: number;
  mood: number;
  category: number;
  image?: string;
}

export const fetchOutings: Function = async () => {
  const outings: Outing[] = await fetch('http://localhost:3000/api/v1/outings', {
    headers: {
      mode: 'cors',
      "Access-Control-Allow-Origin": "*", 
      'Content-Type': 'application/json'
    },
  }).then(resp => resp.json());

  return outings;
};

