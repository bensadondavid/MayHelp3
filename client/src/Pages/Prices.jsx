import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useState } from 'react';

const Prices = ()=>{


    const [visibleSections, setVisibleSections] = useState({});

    const toggleServices = (category) => {
        setVisibleSections(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    return(
        <>
            <Header />
            <div className='prices'>
        <div className="services-table">
            <div className="service-category">
                <h3>Services Administratifs (50 – 250 SHEKEL)</h3>
                <ul className="service-list">
                    <li>Gestion des documents officiels</li>
                    <li>Obtention de permis de séjour, visas, et autres documents d’immigration</li>
                    <li>Traduction de documents officiels</li>
                    <li>Assistance pour remplir des formulaires administratifs</li>
                    {visibleSections['administratifs'] && (
                        <div className="more-services">
                            <li>Gaz, Électricité, Eau …</li>
                            <li>Accompagnement pour les démarches auprès des administrations locales</li>
                            <li>Gestion des amendes et contraventions</li>
                            <li>Vérification et paiement des amendes</li>
                            <li>Contestation de contraventions</li>
                            <li>Banques et finances</li>
                            <li>Ouverture de comptes bancaires</li>
                            <li>Assistance pour les prêts et crédits</li>
                            <li>Suivi des factures et paiements</li>
                            <li>Assurances</li>
                            <li>Souscription et gestion de contrats d’assurance (santé, habitation, voiture, etc.)</li>
                            <li>Rendez-vous administratifs</li>
                            <li>Prise de rendez-vous avec les services publics (misrad hapnim, etc.)</li>
                            <li>Accompagnement aux rendez-vous</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('administratifs')}>
                            {visibleSections['administratifs'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services de Voyage et Réservations</h3>
                <ul className="service-list">
                    <li>Réservations de voyage</li>
                    <li>Logistique</li>
                    <li>Conseil en itinéraire</li>
                    <li>Assistance en cas d’imprévu</li>
                    {visibleSections['voyage'] && (
                        <div className="more-services">
                            <li>Billets d’avion, train, et bus</li>
                            <li>Réservation de chambres d’hôtel ou d’hébergement</li>
                            <li>Location de voitures</li>
                            <li>Organisation de transferts aéroport/hôtel</li>
                            <li>Création d’itinéraires personnalisés pour voyages</li>
                            <li>Recommandations de sites touristiques</li>
                            <li>Réservation de dernière minute</li>
                            <li>Modification ou annulation de réservations</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('voyage')}>
                            {visibleSections['voyage'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services de Bien-être et Confort</h3>
                <ul className="service-list">
                    <li>Soutien pour les familles</li>
                    <li>Services à domicile</li>
                    <li>Bien-être personnel</li>
                    {visibleSections['bien-etre'] && (
                        <div className="more-services">
                            <li>Assistance pour les inscriptions scolaires</li>
                            <li>Recherche et recommandation de baby-sitters, nounous, ou tuteurs</li>
                            <li>Ménage, repassage</li>
                            <li>Jardinage, entretien de piscine</li>
                            <li>Pet-sitting ou soins pour animaux de compagnie</li>
                            <li>Réservation de soins en spa, massages, coiffeurs, esthéticiennes</li>
                            <li>Organisation de séances de coaching ou de thérapie</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('bien-etre')}>
                            {visibleSections['bien-etre'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services d’Urgence et Assistance</h3>
                <ul className="service-list">
                    <li>Services d’urgence</li>
                    <li>Assistance technique</li>
                    {visibleSections['urgence'] && (
                        <div className="more-services">
                            <li>Assistance en cas de perte de documents (passeports, permis de conduire)</li>
                            <li>Gestion des situations d’urgence (incidents domestiques, santé)</li>
                            <li>Réparation d’appareils électroménagers</li>
                            <li>Intervention d’artisans (plombiers, électriciens, etc.)</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('urgence')}>
                            {visibleSections['urgence'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services Spécifiques pour les Soldats (100-400 SHEKEL)</h3>
                <ul className="service-list">
                    <li>Aide logistique</li>
                    <li>Assistance administrative</li>
                    <li>Soutien familial pour les soldats en service</li>
                    {visibleSections['soldats'] && (
                        <div className="more-services">
                            <li>Réservation de transport et d’hébergement gratuit pour les soldats en service</li>
                            <li>Organisation de courses, courses alimentaires ou livraison de repas</li>
                            <li>Gestion des démarches administratives pendant la période de milouim</li>
                            <li>Soutien familial pour les soldats en service (gardes d’enfants, etc.)</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('soldats')}>
                            {visibleSections['soldats'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services Événementiels et de Loisirs</h3>
                <ul className="service-list">
                    <li>Organisation d’événements</li>
                    <li>Réservations pour loisirs</li>
                    <li>Cadeaux et surprises</li>
                    {visibleSections['evenementiel'] && (
                        <div className="more-services">
                            <li>Événements d’entreprise, séminaires</li>
                            <li>Réservation de restaurants, billets de concert, ou spectacles</li>
                            <li>Organisation de sorties en groupe (excursions, visites guidées)</li>
                            <li>Achat et livraison de cadeaux</li>
                            <li>Organisation de surprises pour occasions spéciales</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('evenementiel')}>
                            {visibleSections['evenementiel'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>

            <div className="service-category">
                <h3>Services Personnalisés</h3>
                <ul className="service-list">
                    <li>Conciergerie privée</li>
                    <li>Accompagnement personnalisé et disponible 24/7</li>
                    {visibleSections['personnalises'] && (
                        <div className="more-services">
                            <li>Services sur-mesure selon les besoins spécifiques du client</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('personnalises')}>
                            {visibleSections['personnalises'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>
            <div className="service-category">
                <h3>Services pour les Nouveaux Arrivants</h3>
                <ul className="service-list">
                    <li>Relocation</li>
                    <li>Intégration</li>
                    {visibleSections['nouveaux-arrivants'] && (
                        <div className="more-services">
                            <li>Recherche de logement</li>
                            <li>Assistance pour l’installation (meubles, abonnements)</li>
                            <li>Cours de langue</li>
                            <li>Orientation pour découvrir la ville et ses services</li>
                        </div>
                    )}
                    <li>
                        <button className="see-more-btn" onClick={() => toggleServices('nouveaux-arrivants')}>
                            {visibleSections['nouveaux-arrivants'] ? 'Voir moins' : 'Voir plus'}
                        </button>
                    </li>
                </ul>
            </div>
            </div>
            </div>
            <Footer />
            </>
    )
}

export default Prices