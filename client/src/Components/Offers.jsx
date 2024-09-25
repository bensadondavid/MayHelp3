const SpecialOffers = () => {
    return (
        <div className="special-offers-section">
            <h3 className="special-offers-title">Nos Offres Spéciales</h3>
            <div className="offers-container">
                <div className="offer-card">
                    <h4>Prestation Simple</h4>
                    <p>80₪</p>
                </div>
                <div className="offer-card">
                    <h4>Prestation avec Suivi</h4>
                    <p>130₪</p>
                </div>
                <div className="offer-card">
                    <h4>Offre Duo</h4>
                    <p>Deux prestations simples à 150₪</p>
                </div>
                <div className="offer-card">
                    <h4>Forfait “Suivi”</h4>
                    <p>Deux prestations avec suivi à 240₪</p>
                </div>
                <div className="offer-card">
                    <h4>Offre Fidélité</h4>
                    <p>Pour chaque cinq prestations achetées, la sixième est offerte</p>
                </div>
                <div className="offer-card">
                    <h4>Réduction Parrainage</h4>
                    <p>15₪ de réduction pour chaque client recommandé</p>
                </div>
                <div className="offer-card">
                    <h4>Cadeau de Bienvenue</h4>
                    <p>Prestation simple gratuite pour tout nouveau client</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;