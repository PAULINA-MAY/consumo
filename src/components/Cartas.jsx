import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Cartas() {
  const [carta, setCarta] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCarta = async () => {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=$6983839`
      );
      const data = await response.json();
      setCarta(data.data[0]);
    };
    fetchCarta();
  }, [id]);

  return (
    <div className="general">
      <h1 className="titulo2"> {carta.name}</h1>
      <div className="caja1">
        <img class="h1" src={carta.card_images?.[0]?.image_url} alt={carta.name} />
        <h2 class="h2">Descripcion : </h2>
      <h3 className="contentD">{carta.desc}</h3>
      <p className="description">ATK: {carta.atk}</p>
      <p className="description">DEF: {carta.def}</p>
      <p className="description">Type: {carta.type}</p>
      <p className="description">Race: {carta.race}</p>
      <p className="description">Level: {carta.level}</p>
      <p className="description">Attribute: {carta.attribute}</p>
      <h2 class="h2">Sets</h2>
      <ul>
        {carta.card_sets?.map((set) => (
          <li className="description" key={set.set_code}>
            {set.set_name} - {set.set_rarity}
          </li>
        ))}
      </ul>
        <h2  class="h2">Prices</h2>
      <ul>
        {carta.card_prices?.map((price) => (
          <li className="description" key={price.ebay_price}>
            eBay: ${price.ebay_price} - TCGPlayer: ${price.tcgplayer_price}
          </li>
        ))}
      </ul>
      </div>
      
      </div>
  );
}

export { Cartas };