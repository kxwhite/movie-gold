// import React, { useState } from "react";
// import "./ShuffleCards.scss";

// import GhostInTheShell from "../../../../assets/categoriesAssets/mainImage/ghostintheshell.jpeg";
// import Nerve from "../../../../assets/categoriesAssets/mainImage/nerve-cover.jpeg";
// import OnlyGodForgives from "../../../../assets/categoriesAssets/mainImage/Only_God_Forgives_poster.jpeg";

// function ShuffleCards() {
//   const initialHeights = [720, 760, 800];
//   const initialCards = [
//     { image: OnlyGodForgives, height: initialHeights[0] },
//     { image: Nerve, height: initialHeights[1] },
//     { image: GhostInTheShell, height: initialHeights[2] },
//   ];
//   const [cards, setCards] = useState(initialCards);

//   const handleCardClick = () => {
//     const updatedCards = [...cards];
//     const frontCard = updatedCards.shift();
//     updatedCards.push(frontCard);

//     updatedCards.forEach((card, index) => {
//       card.height = initialHeights[index];
//     });
//     setCards(updatedCards);
//   };

//   return (
//     <div className="cards-container">
//       <div className="cards">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`card ${
//               index === cards.length - 1 ? "card--current" : ""
//             }`}
//             onClick={index === cards.length - 1 ? handleCardClick : undefined}
//             style={{ height: card.height }}
//           >
//             <img src={card.image} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ShuffleCards;


import React, { useState } from "react";
import "./ShuffleCards.scss";

import GameNight from "../../../../assets/categoriesAssets/mainImage/gamenight.jpg";
import Happy from "../../../../assets/categoriesAssets/mainImage/happy.jpg";
import MonsterHouse from "../../../../assets/categoriesAssets/mainImage/monsterhouse.jpg";

function ShuffleCards() {
  const initialHeights = [720, 760, 800];
  const initialCards = [
    { id: 1, image: MonsterHouse, height: initialHeights[0] },
    { id: 2, image: Happy, height: initialHeights[1] },
    { id: 3, image: GameNight, height: initialHeights[2] },
  ];
  const [cards, setCards] = useState(initialCards);

  const handleCardClick = () => {
    const updatedCards = [...cards];
    const frontCard = updatedCards.shift();
    updatedCards.push(frontCard);

    updatedCards.forEach((card, index) => {
      card.height = initialHeights[index];
    });
    setCards(updatedCards);
  };

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`card card${card.id}`}
          style={{ height: "700px", width: "475px" }}
        >
          <img src={card.image} alt={card.alt} />
        </div>
      ))}
    </div>

    // <div className="cards-container">
    //   <div className="cards">
    //     {cards.map((card, index) => (
    //       <div
    //         key={index}
    //         className={`card ${
    //           index === cards.length - 1 ? "card--current" : ""
    //         } card${index.toString}`}
    //         onClick={index === cards.length - 1 ? handleCardClick : undefined}
    //         style={{ height: card.height }}
    //       >
    //         <img src={card.image} alt="" />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default ShuffleCards;
