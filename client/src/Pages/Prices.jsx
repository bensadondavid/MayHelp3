import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';
import SpecialOffers from '../Components/Offers';

const Prices = () => {
    const [visibleSections, setVisibleSections] = useState({});

    const toggleServices = (category) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }));
    };

    return (
        <>
            <Header />
            <div className='prices'>
                <h1 style={{textAlign:'center', color:'white', fontFamily:'Montserrat', paddingBottom: '60px'}}>Nos Tarifs</h1>
                <div className="services-table">

                    {/* Services Administratifs */}
                    <div className="service-category">
                        <h3>Services Administratifs (50 – 250₪)</h3>
                        <ul className="service-list">
                            <li>Gestion des documents officiels (Arnona, Bituah Leoumi, etc.) : 80-130₪</li>
                            <li>Obtention de permis de séjour, visas, et autres documents d’immigration : 120₪</li>
                            <li>Traduction de documents officiels : 50₪</li>
                            <li>Assistance pour remplir des formulaires administratifs : 70₪</li>
                            {visibleSections['administratifs'] && (
                                <div className="more-services">
                                    <li>Gaz, Électricité, Eau : 75₪</li>
                                    <li>Accompagnement pour les démarches auprès des administrations locales : 80-130₪</li>
                                    <li>Gestion des amendes et contraventions : 70-80₪</li>
                                    <li>Ouverture de comptes bancaires (Jérusalem) : 100₪</li>
                                    <li>Suivi des factures et paiements : 80₪</li>
                                    <li>Souscription et gestion de contrats d’assurance (santé, habitation, voiture) : 80₪</li>
                                    <li>Prise de rendez-vous avec les services publics : 60₪</li>
                                    <li>Accompagnement aux rendez-vous (Jérusalem) : 100₪</li>
                                </div>
                            )}
                            <li>
                                <button className="see-more-btn" onClick={() => toggleServices('administratifs')}>
                                    {visibleSections['administratifs'] ? 'Voir moins' : 'Voir plus'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services de Voyage et Réservations */}
                    <div className="service-category">
                        <h3>Services de Voyage et Réservations (80-150₪)</h3>
                        <ul className="service-list">
                            <li>Réservations de voyage (billets d’avion, train, bus) : 80₪</li>
                            <li>Réservation de chambres d’hôtel : 80₪</li>
                            <li>Logistique : Location de voitures, transferts aéroport (prix de la société)</li>
                            <li>Conseil en itinéraire : 120₪</li>
                            {visibleSections['voyage'] && (
                                <div className="more-services">
                                    <li>Recommandations de sites touristiques : 80₪</li>
                                    <li>Réservation de dernière minute : 150₪</li>
                                    <li>Modification ou annulation de réservations : 80₪</li>
                                </div>
                            )}
                            <li>
                                <button className="see-more-btn" onClick={() => toggleServices('voyage')}>
                                    {visibleSections['voyage'] ? 'Voir moins' : 'Voir plus'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services de Bien-être et Confort */}
                    <div className="service-category">
                        <h3>Services de Bien-être et Confort</h3>
                        <ul className="service-list">
                            <li>Soutien pour les familles (inscriptions scolaires) : 80₪</li>
                            <li>Recherche de baby-sitters, nounous (prix du service + 15₪/heure)</li>
                            <li>Ménage, repassage (prix du service + 15₪/heure)</li>
                            {visibleSections['bien-etre'] && (
                                <div className="more-services">
                                    <li>Réservation de soins en spa, massages, coiffeurs : 80₪</li>
                                    <li>Organisation de séances de coaching ou de thérapie : 80₪</li>
                                </div>
                            )}
                            <li>
                                <button className="see-more-btn" onClick={() => toggleServices('bien-etre')}>
                                    {visibleSections['bien-etre'] ? 'Voir moins' : 'Voir plus'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services d'Urgence et Assistance */}
                    <div className="service-category">
                        <h3>Services d’Urgence et Assistance (150-250₪)</h3>
                        <ul className="service-list">
                            <li>Assistance en cas de perte de documents (passeports, permis) : 250₪</li>
                            <li>Gestion des situations d’urgence (domestiques, santé) : 250₪</li>
                            {visibleSections['urgence'] && (
                                <div className="more-services">
                                    <li>Intervention d’artisans (plombiers, électriciens) : 150₪</li>
                                </div>
                            )}
                            <li>
                                <button className="see-more-btn" onClick={() => toggleServices('urgence')}>
                                    {visibleSections['urgence'] ? 'Voir moins' : 'Voir plus'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services Spécifiques pour les Soldats */}
                    <div className="service-category">
                        <h3>Services Spécifiques pour les Soldats (Gratuit ou jusqu’à 75 % de réduction)</h3>
                        <ul className="service-list">
                            <li>Aide logistique</li>
                            <li>Assistance administrative</li>
                            <li>Soutien familial pour les soldats en service</li>
                            {visibleSections['soldats'] && (
                                <div className="more-services">
                                    <li>Réservation de transport et d’hébergement gratuit pour les soldats en service</li>
                                    <li>Organisation de courses alimentaires ou livraison de repas</li>
                                    <li>Gestion des démarches administratives pendant la période de milouim</li>
                                    <li>Soutien familial pour les soldats (gardes d’enfants, etc.)</li>
                                </div>
                            )}
                            <li>
                                <button className="see-more-btn" onClick={() => toggleServices('soldats')}>
                                    {visibleSections['soldats'] ? 'Voir moins' : 'Voir plus'}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services Événementiels et de Loisirs */}
                    <div className="service-category">
                        <h3>Services Événementiels et de Loisirs (Devis à la demande)</h3>
                        <ul className="service-list">
                            <li>Organisation d’événements (entreprise, séminaires)</li>
                            <li>Réservations pour loisirs : 60₪</li>
                            <li>Cadeaux et surprises</li>
                            {visibleSections['evenementiel'] && (
                                <div className="more-services">
                                    <li>Réservation de restaurants, billets de concert, ou spectacles</li>
                                    <li>Organisation de sorties en groupe (excursions, visites guidées) : 80₪</li>
                                    <li>Achat et livraison de cadeaux (devis)</li>
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

                    {/* Services Personnalisés */}
                    <div className="service-category">
                        <h3>Services Personnalisés (Tarif sur demande)</h3>
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

                    {/* Services pour les Nouveaux Arrivants */}
                    <div className="service-category">
                        <h3>Services pour les Nouveaux Arrivants (Tarif a la prestation)</h3>
                        <ul className="service-list">
                            <li>Relocation : Recherche de logement, assistance pour l’installation</li>
                            <li>Intégration : Cours de langue, orientation pour découvrir la ville et ses services</li>
                            {visibleSections['nouveaux-arrivants'] && (
                                <div className="more-services">
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
                <SpecialOffers />
            </div>
            <Footer />
        </>
    );
};

export default Prices;