import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Conditions = () => {
    return (
        <>
        <Header/>
        <div className="conditions-generales">
            <div className="cgu-container">
                <h1>Conditions Générales d'Utilisation (CGU)</h1>

                <div className="cgu-section">
                    <h2>1. Objet</h2>
                    <p>
                        Les présentes conditions générales d'utilisation (ci-après "CGU") ont pour objet de définir les modalités d'accès et d'utilisation du site internet <strong>mayhelp.co.il</strong> (ci-après "le Site"). En accédant ou en utilisant le Site, l'utilisateur (ci-après "Utilisateur") accepte sans réserve les présentes CGU.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>2. Services</h2>
                    <p>
                        Le Site propose divers services de conciergerie (ci-après "les Services") sous le nom de <strong>MayHelp</strong>, tels que :
                    </p>
                    <ul>
                        <li><strong>Assistance administrative</strong></li>
                        <li><strong>Gestion de réservations</strong></li>
                        <li><strong>Autres prestations détaillées sur le Site</strong></li>
                    </ul>
                    <p>Ces services peuvent être modifiés à tout moment sans préavis.</p>
                </div>

                <div className="cgu-section">
                    <h2>3. Accès au Site</h2>
                    <p>
                        Le Site est accessible gratuitement à tout Utilisateur disposant d’un accès à Internet. Tous les coûts relatifs à l'accès au Site, que ce soit les frais matériels, logiciels ou d'accès à Internet, sont à la charge de l'Utilisateur.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>4. Obligations de l'Utilisateur</h2>
                    <p>L'Utilisateur s'engage à :</p>
                    <ul>
                        <li>Utiliser le Site conformément aux présentes CGU et à la législation en vigueur.</li>
                        <li>Ne pas utiliser le Site à des fins illégales, frauduleuses ou nuisibles.</li>
                    </ul>
                </div>

                <div className="cgu-section">
                    <h2>5. Protection des données personnelles</h2>
                    <p>
                        MayHelp respecte la confidentialité des données personnelles de l'Utilisateur. Les informations collectées lors de l'utilisation du Site sont utilisées uniquement dans le cadre des services proposés par MayHelp. Pour plus de détails, consultez notre <a href="lien-vers-la-politique-de-confidentialité">Politique de Confidentialité</a>.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>6. Responsabilité</h2>
                    <ul>
                        <li>MayHelp s'efforce de fournir des services de qualité, mais ne garantit en aucun cas les résultats spécifiques obtenus grâce à l'utilisation des Services.</li>
                        <li>L'Utilisateur reconnaît que les résultats des Services peuvent varier en fonction de nombreux facteurs échappant au contrôle de MayHelp. Par conséquent, MayHelp décline toute responsabilité en cas de résultats insatisfaisants ou inattendus découlant de l'utilisation des Services.</li>
                    </ul>
                </div>

                <div className="cgu-section">
                    <h2>7. Frais supplémentaires</h2>
                    <p>
                        Dans le cadre de l'exécution des Services, si des travaux supplémentaires non prévus initialement sont nécessaires, cela peut entraîner des frais supplémentaires pour l'Utilisateur. MayHelp s'engage à informer l'Utilisateur dès que possible de tout dépassement de travail initialement convenu et des frais qui en découleront. L'Utilisateur sera tenu de régler ces frais supplémentaires en accord avec les modalités définies par MayHelp.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>8. Liens vers des sites tiers</h2>
                    <p>
                        Le Site peut contenir des liens vers des sites internet tiers. MayHelp n'est pas responsable du contenu de ces sites tiers ni des pratiques de confidentialité de ces derniers.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>9. Modification des CGU</h2>
                    <p>
                        MayHelp se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront effectives dès leur mise en ligne sur le Site. L'Utilisateur est invité à consulter régulièrement les CGU pour prendre connaissance de toute mise à jour.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>10. Propriété intellectuelle</h2>
                    <p>
                        Tous les éléments du Site, y compris les textes, images, logos, graphiques, sont la propriété exclusive de MayHelp ou sont utilisés avec l'autorisation des titulaires des droits. Toute reproduction, distribution ou utilisation de ces éléments sans l'autorisation écrite préalable de MayHelp est interdite.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>11. Droit applicable et juridiction compétente</h2>
                    <p>
                        Les présentes CGU sont régies par le droit israélien. Tout litige relatif à l'interprétation ou à l'exécution des présentes CGU sera soumis à la compétence exclusive des tribunaux israéliens.
                    </p>
                </div>

                <div className="cgu-section">
                    <h2>12. Contact</h2>
                    <p>
                        Pour toute question ou réclamation concernant le Site ou les CGU, l'Utilisateur peut contacter MayHelp à l'adresse email suivante : <a href="mailto:contact@mayhelp.co.il">contact@mayhelp.co.il</a> ou par téléphone au 0587396562.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Conditions;