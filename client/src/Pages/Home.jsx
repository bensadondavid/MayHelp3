import React from "react";
import Header from "../Components/Header";
import Testimonies from "../Components/Testimonies";

const Home = () => {

  const scrollToTestimonials = () => {
    document.getElementById("testimonies-section").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="home">
        <Header />
        <div className="central-text">
          <p className="big-text">Ne bougez plus, <br /> On s'occupe de tout.</p>
          <p className="small-text">Bienvenue chez MayHelp, votre accompagnateur au quotidien.</p>
          <div className="buttons">
            <button onClick={scrollToTestimonials}>En savoir plus</button>
            <button>Nous contacter</button>
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
                <p className="about-text">
                    MayHelp est né d’une passion pour l’organisation et le désir de simplifier la vie de chacun.
                     Nous savons à quel point les démarches administratives peuvent être chronophages et stressantes, 
                     surtout dans un pays étranger ou lorsque les délais sont serrés. C’est pourquoi nous avons créé un service de conciergerie 
                     administrative sur mesure, dédié à alléger votre quotidien en prenant en charge vos tâches administratives et logistiques.
                     Basés en Israël, nous sommes une équipe de professionnels expérimentés, parlant plusieurs langues et profondément ancrés dans la culture locale. 
                     Nous comprenons les spécificités des systèmes administratifs israélien et français, et nous mettons notre expertise à votre service pour gérer efficacement vos besoins,
                     que ce soit pour l’obtention de documents officiels, la gestion de votre immigration, la réservation de services, ou tout autre besoin quotidien.
                     Notre mission est simple : vous permettre de vous concentrer sur ce qui compte vraiment, en vous libérant des tracas administratifs. Chez MayHelp,
                     nous croyons que chaque minute est précieuse. C’est pourquoi nous nous engageons à vous offrir un service personnalisé, réactif et fiable, adapté à vos exigences uniques.
                     Faites confiance à MayHelp pour vous accompagner dans toutes vos démarches, et découvrez la tranquillité d’esprit que vous méritez.
                     </p>
            </div>
            <div className="temoignages">
            <Testimonies />
            </div>
      </div>
    </>
  );
};

export default Home;