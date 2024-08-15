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
            <div className="about">
                <p>Qui Sommes-Nous ?</p>
            </div>
            <div className="temoignages">
            <Testimonies />
            </div>
      </div>
    </>
  );
};

export default Home;