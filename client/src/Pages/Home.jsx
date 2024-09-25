import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Testimonies from "../Components/Testimonies";
import Footer from "../Components/Footer";
import SpecialOffers from "../Components/Offers";

const Home = () => {

  const scrollToTestimonials = () => {
    document.getElementById("testimonies-section").scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToContact = () => {
    document.getElementById("footer").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="home">
        <Header />
        <div className="central-text" id='Home'>
          <p className="big-text">Ne bougez plus, <br /> On s'occupe de tout.</p>
          <p className="small-text">Bienvenue chez MayHelp, votre accompagnateur au quotidien.</p>
          <div className="buttons">
            <Link to='/services'><button>En savoir plus</button></Link>
            <button onClick={scrollToContact}>Nous contacter</button>
          </div>
          <button className="svgs" onClick={scrollToTestimonials}>
            <svg id="svg1" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
            <svg id="svg2" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
            <svg id="svg3" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
            <svg id="svg4" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
            <svg id="svg5" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Down_Arrow_3_" d="m64 88c-1.023 0-2.047-.391-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l37.172 37.172 37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40c-.781.781-1.805 1.172-2.828 1.172z"></path></svg>
          </button>
        </div>
      </div>
      <div className="scnd-page" id="testimonies-section">
      <hr />
            <div className="about">
                <p className="about-title">Qui Sommes-Nous ?</p>
                <div className="about-text">
                <p>Je m’appelle Yehouda Mayer, j’ai fait mon Alyah il y a six ans. Aujourd’hui, je vis à Jérusalem, où je me suis progressivement intégré à la société israélienne.</p>

                <p>Dès mon arrivée en Israël, j’ai plongé au cœur de notre magnifique pays en servant dans l’armée, sans connaître un mot d’hébreu. Petit à petit, j’ai trouvé ma place et j’ai compris qu’il fallait persévérer pour avancer et réussir.</p>

                <p>J’ai aussi réalisé à quel point le système administratif en Israël est différent de celui en France, et qu’il demande beaucoup de temps, de patience et d’énergie. Avec le temps, j’ai vu que je n’étais pas le seul à rencontrer ces difficultés, et je me suis promis qu’un jour, je ferais tout pour aider dans ce domaine. C’est ainsi qu’est née l’idée de MayHelp, un projet mûri au fil des années, et que je mets aujourd’hui à votre disposition pour vous permettre de simplifier votre quotidien.</p>

                <p>MayHelp est bien plus qu’un simple service de conciergerie. C’est le fruit de ma passion pour l’organisation et de mon désir sincère de rendre la vie plus facile pour ceux qui, comme moi, peuvent se sentir dépassés par les démarches administratives, surtout dans un pays étranger.</p>

                <p>Je sais à quel point ces tâches peuvent être longues et stressantes, c’est pourquoi j’ai créé un service sur mesure, conçu pour alléger votre quotidien en prenant en charge vos tâches administratives et logistiques.</p>

                <p>Basé en Israël, MayHelp est le résultat de mon expérience et de mon ancrage profond dans la culture locale. Aujourd’hui, je parle hébreu couramment, et je comprends les spécificités des systèmes administratifs israéliens et français. J’utilise mon expertise pour gérer efficacement vos besoins, que ce soit pour l’obtention de documents officiels, la gestion de votre immigration, la réservation de services, ou tout autre besoin quotidien.</p>

                <p>Ma mission est simple : vous permettre de vous concentrer sur ce qui compte vraiment, en vous libérant des tracas administratifs.</p>

                <p>Chez MayHelp, je crois que chaque minute est précieuse. C’est pour cela que je m’engage à vous offrir un service personnalisé, réactif et fiable, qui répond à vos exigences uniques.</p>

                <p>Faites-moi confiance pour vous accompagner dans toutes vos démarches, et découvrez la tranquillité d’esprit que vous méritez.</p></div>
            
            </div>
            <div className="temoignages">
            <Testimonies />
            </div>
      </div>
      <div className="sp-home">
        <SpecialOffers />
      </div>
      <Footer />
    </>
  );
};

export default Home;