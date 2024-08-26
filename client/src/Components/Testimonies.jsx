import React, { useEffect, useState } from "react";

const Testimonies = () => {

  const testimonies = [
    {
      name: "Ruthy Illouz",
      location: "Paris",
      text: "Je recommande de se faire accompagner pour votre alya par MayHelp. J’ai été impressionné par le sérieux et l’investissement ! J’ai été aidé pour toutes mes démarches, que ce soit pour trouver mon école ou pour mes rendez-vous (ma teoudat zehout, l’ouverture de mon compte bancaire…). Un immense merci, grâce à vous, mon alya s’est faite de façon beaucoup plus sereine et organisée !!"
    },
    {
      name: "Yossef Nabet",
      location: "Jerusalem",
      text: "Yehouda est hyper efficace. Il comprend vite le problème et le traite jusqu’au bout. Il est juste parfait pour parler aux interlocuteurs israéliens. Il ne lâche rien et obtient ce qu’il veut ! Il a un très grand sens du devoir et du service."
    },
    {
      name: "Hai Moshé A.",
      location: "Jerusalem",
      text: "MayHelp a été d’une aide précieuse pour mon inscription à l’université. Étant à l’étranger, ils ont pris en charge toutes les démarches nécessaires, rendant le processus simple et fluide. Leur professionnalisme et leur capacité d’écoute m’ont particulièrement impressionné. Je recommande vivement leurs services. Merci beaucoup à toute l’équipe ! ",
    },
    {
      name: "Alex H.",
      location: "Tel Aviv",
      text: "Merci à MayHelp qui nous a permis de passer ce cap en toute efficacité  Entre les relevés des compteurs , suivi des dossiers gaz, eau, éléctricté, nos demarches en ont été grandement facilitées."
    },
    {
      name: "Samuel B.",
      location: "Haifa",
      text: "La gestion de mes documents fiscaux et administratifs n'a jamais été aussi simple. MayHelp s'occupe de tout avec un grand professionnalisme.",
    },
    {
      name: "Rachel K.",
      location: "Marseille",
      text: "En tant que nouvelle immigrante, j'avais besoin de beaucoup d'assistance pour m'intégrer en Israël. MayHelp a été là à chaque étape, rendant le processus bien plus facile.",
    },
    {
      name: "Miriam D.",
      location: "Ramat Gan",
      text: "Un grand merci à MayHelp pour m'avoir aidée avec tous mes papiers administratifs. Ils sont très réactifs et toujours prêts à aider.",
    },
    {
      name: "Hannah L.",
      location: "Nice",
      text: "MayHelp a organisé toutes mes réservations de voyage pour un déplacement professionnel. Tout était parfaitement coordonné et sans aucune erreur. Très satisfait !",
    },
    {
      name: "Rebecca T.",
      location: "Beersheba",
      text: "J'ai pu me concentrer sur mon travail pendant que MayHelp s'occupait de tout le reste. Un service indispensable pour tous ceux qui manquent de temps.",
    }
  ];

  const [index, setIndex] = useState(0);

  const PreviousItem = () => {
    setIndex(previousIndex => (previousIndex === 0 ? testimonies.length - 1 : previousIndex - 1));
  };

  const NextItem = () => {
    setIndex(previousIndex => (previousIndex === testimonies.length - 1 ? 0 : previousIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextItem();
    }, 6000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="testimonies-container">
      <div className="testimonies-elements" key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" width="120" height="24">
          <path fill="#003366" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <path fill="#003366" d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2l-2.81 6.63L26 9.24l5.46 4.73L29.82 21z"/>
          <path fill="#003366" d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2l-2.81 6.63L50 9.24l5.46 4.73L53.82 21z"/>
          <path fill="#003366" d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2l-2.81 6.63L74 9.24l5.46 4.73L77.82 21z"/>
          <path fill="#003366" d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2l-2.81 6.63L98 9.24l5.46 4.73L101.82 21z"/>
          <path d="M0 0h120v24H0z" fill="none"/>
        </svg>
        <p>{testimonies[index].text}</p>
        <p className="testimonie-name">{testimonies[index].name}, {testimonies[index].location}</p>
        <button className="previous-button" onClick={PreviousItem}> &lt; </button>
        <button className="next-button" onClick={NextItem}>&gt;</button>
      </div>
    </div>
    </>
  );
};

export default Testimonies;