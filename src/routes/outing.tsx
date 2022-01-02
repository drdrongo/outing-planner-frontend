import { useContext, useCallback } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// import { getOuting, deleteOuting } from "../data/dummy_outings";
import { OutingsContext } from '../contexts/OutingsContext';
import Star from '@mui/icons-material/Star';
import CurrencyYen from '@mui/icons-material/CurrencyYen';
import { Outing } from '../data/outings'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

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

  const toggleFavorite = () => {
    console.log('foo')
  };

  const { title, mood, price, description, image, genre, is_complete, is_favorite } = outing;

  return (
    <main className="outing-content" style={{ padding: "1rem" }}>
      <h2>{title}</h2>
      <p>Excitement Rating:</p>
      {[...Array(mood)].map((_star, idx) => <Star key={idx}/>)}

      <p>Favorite:</p>
      <button onClick={toggleFavorite} style={{ backgroundColor: 'pink' }}>
        {is_complete ? <Favorite /> : <FavoriteBorder />}
      </button>

      <p>Price:</p>
      {[...Array(price)].map((_yen, idx) => <CurrencyYen key={idx}/>)}
      <p>{description}</p>
      { image && <img src={image} alt="" /> }
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
