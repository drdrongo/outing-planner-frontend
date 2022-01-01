import { useParams, useNavigate } from "react-router-dom";
// import { getOuting, deleteOuting } from "../data/dummy_outings";
import { OutingsContext } from '../contexts/OutingsContext';
import { useContext } from 'react';
import Star from '@mui/icons-material/Star';

interface Outing {
  id: number;
  title: string;
  description: string;
  price: number;
  mood: number;
  category: number;
  image?: string;
}

export default function OutingsShow() {

  const { outings, getOuting } = useContext(OutingsContext);

  const navigate = useNavigate();
  const params: any = useParams();
  const outing: Outing | undefined = getOuting(parseInt(params.outingId, 10));


  if (!outing) {
    return (
      <main  className="outing-content" style={{ padding: "1rem" }}>
        <h2>Nothing here</h2>
      </main>
    ) 
  }

  // id: number;
  // title: string;
  // description: string;
  // price: number;
  // mood: number;
  // category: number;
  // image?: string;

  return (
    <main className="outing-content" style={{ padding: "1rem" }}>
      <h2>{outing.title}</h2>
      <p>Excitement Rating:</p>
      {[...Array(outing.mood)].map(star => <Star/>)}
      <p>
        : Price:{outing.price}
      </p>
      {/* <p>Due Date: {outing.category}</p> */}
      <p>{outing.description}</p>
      <p>
        <button
          onClick={() => {
            if (!outing) return;

            // deleteOuting(outing.id);
            navigate("/outings");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
