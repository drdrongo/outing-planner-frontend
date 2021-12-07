import { useParams, useNavigate } from "react-router-dom";
import { getOuting, deleteOuting } from "../data/dummy_outings";

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
  let navigate = useNavigate();
  let params: any = useParams();
  let outing: Outing | undefined = getOuting(parseInt(params.outingId, 10));

  if (!outing) {
    return (
      <main style={{ padding: "1rem" }}>
        <h2>Nothing here</h2>
      </main>
    ) 
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {outing.mood}</h2>
      <p>
        {outing.title}: {outing.price}
      </p>
      <p>Due Date: {outing.category}</p>
      <p>
        <button
          onClick={() => {
            if (!outing) return;

            deleteOuting(outing.id);
            navigate("/outings");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
