import React, { useState } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [indicatif, setIndicatif] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleIndicatif = (e) => {
    setIndicatif(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceID = "service_r2x06rs";
    const templateID = "template_z6o3ihp";
    const userID = "otGW8L8uaTqBXqF18";

    const templateParams = {
      lastName: lastName,
      firstName: firstName,
      indicatif: indicatif || "+972",
      phone: phone,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message envoyé avec succès !");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Échec de l'envoi du message.");
        }
      );
  };

  return (
    <>
      <footer id="footer">
        <div className="contact">
          <p>Contactez-Nous</p>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="infos">
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                value={lastName}
                onChange={handleLastName}
              />
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                value={firstName}
                onChange={handleFirstName}
              />
              <div className="phone">
                <select name="indicatif" value={indicatif} onChange={handleIndicatif}>
                  <option value="+972">IL +972</option>
                  <option value="+33">FR +33</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Votre message"
              value={message}
              onChange={handleMessage}
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
            <hr />
        <div className="horaires-contact">
            <div className="horaires">
                <p style={{fontSize : 'large', textAlign: 'center'}}>
                    Dimanche au Jeudi
                    <br /> 9H à 20H
                </p>
            </div>
            <div className='tel'>
                    <p>Tel : </p>
                    <a href="tel:+972 58-739-6562"><button>+972 58-739-6562</button></a>
              </div>
              <div className="reseaux">
                <a className='whatsapp' href="https://wa.me/972587396562">
                <svg height="512" viewBox="0 0 176 176" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_3938041"><g id="Layer_2" dataname="Layer 2"><g id="_08.whatsapp" dataname="08.whatsapp"><path id="background" d="m144.52 173a532.59 532.59 0 0 1 -113 0 32.07 32.07 0 0 1 -28.52-28.48 532.59 532.59 0 0 1 0-113 32.07 32.07 0 0 1 28.48-28.52 532.59 532.59 0 0 1 113 0 32.07 32.07 0 0 1 28.52 28.48 532.59 532.59 0 0 1 0 113 32.07 32.07 0 0 1 -28.48 28.52z" fill="#29a71a"></path><g id="icon" fill="#fff"><path d="m126.8 49.2a54.57 54.57 0 0 0 -87.42 63.13l-5.79 28.11a2.08 2.08 0 0 0 .33 1.63 2.11 2.11 0 0 0 2.24.87l27.55-6.53a54.56 54.56 0 0 0 63.09-87.21zm-8.59 68.56a42.74 42.74 0 0 1 -49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 0 1 7.86-49.59 42.73 42.73 0 0 1 60.42 0 2.28 2.28 0 0 0 .22.22 42.72 42.72 0 0 1 -.22 60.19z"></path><path d="m116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15c-12.09-11.21-15.23-20.54-14.47-27.94.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 0 1 6.15 1.41l4.45 10a3.91 3.91 0 0 1 -.49 4l-2.25 2.92a3.87 3.87 0 0 0 -.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 0 0 4.19-.88l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.91z"></path></g></g></g></svg>
                </a>

                <a className='instagram' href="https://www.instagram.com/mayhelp.co.il/">
                    <svg enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="fi_2111463"><linearGradient id="SVGID_1_" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"><stop offset="0" stopColor="#fd5"></stop><stop offset=".5" stopColor="#ff543e"></stop><stop offset="1" stopColor="#c837ab"></stop></linearGradient><path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#SVGID_1_)"></path><path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#fff"></path></svg>
                </a>

                <a className='facebook' href="https://www.facebook.com/profile.php?id=61563961290695">
                    <svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_2504903"><g fillRule="evenodd"><path d="m32 64h-16a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16h-6a5 5 0 0 0 -10 0z" fill="#3764b9"></path><path d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30" fill="#507dd2"></path><path d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16" fill="#1e4ba0"></path><path d="m52 18a2 2 0 0 1 -2 2h-6a2 2 0 0 0 -2 2v8h7.56a2 2 0 0 1 1.9612 2.392c-.3713 1.857-.8757 4.379-1.2 6a2 2 0 0 1 -1.9612 1.608h-6.36v24h-10v-24h-6a2 2 0 0 1 -2-2v-6a2 2 0 0 1 2-2h6v-8a12 12 0 0 1 12-12h6a2 2 0 0 1 2 2z" fill="#fff"></path></g></svg>
                    </a>
            </div>
        </div>
        <div className="conditions">
            <a href='/conditions'>Conditions générales d'utilisation</a>
        </div>
        </footer>
        </>
    )
}

export default Footer