import FooterPage from "../footer";
import NavBar from "../nav";

const Realisations = () => {
    return (
        <section>
            <section>
                <NavBar/>
            </section>
            <section>
                <img className="background" src="../assets/fondbleu.jpg" alt="fond bleu"/>
            </section>
            <section className="presentation">
                <h2 className="text-uppercase">Portfolio</h2>
                <p>Voici quelques-unes de mes réalisations</p>
                <hr className="hr-rea"/>
            </section>
            <section className="allcard row row-cols-1 row-cols-md-2 row-cos-lg-3 g-4">
                <section className="card" style={{width: 400}}>
                    <img src="../assets/réalisations/freshfood.jpg" className="card-img-top" id="card-img-top" alt="Image de ma réalisation Fresh food"/>
                    <section className="card-body" id="card-body">
                        <h3 className="card-title">Fresh food</h3>
                        <p className="card-text">Réalisation d'un site avec commande en ligne</p>
                        <a href="#" className="btn btn-outline-primary">Voir</a>
                    </section>
                    <section className="card-footer">
                        Site réalisé avec PHP et MySQL
                    </section>
                </section>
                <section className="card h-75" id="card-2" style={{width: 400}}>
                    <img src="../assets/réalisations/sushi.jpg" className="card-img-top" id="card-img-top" alt="Image de ma réalisation Restaurant Akira" />
                    <section className="card-body" id="card-body">
                        <h3 className="card-title">Restaurant Akira</h3>
                        <p className="card-text">Réalisation d'un site vitrine</p>
                        <a href="#" className="btn btn-outline-primary">Voir</a>
                    </section>
                    <section className="card-footer">
                        Site réalisé avec WordPress
                    </section>
                </section>
                <section className="card" style={{width: 400}}>
                    <img src="../assets/réalisations/bienêtre.jpg" className="card-img-top" id="card-img-top" alt="Image de ma réalisation espace bien être"/>
                    <section className="card-body" id="card-body">
                        <h3 className="card-title">Espace bien-être</h3>
                        <p className="card-text">Réalisation d'un site vitrine pour un practicien de bien-être</p>
                        <a href="#" className="btn btn-outline-primary">Voir</a>
                    </section>
                    <section className="card-footer">
                        Site réalisé en HTML/CSS
                    </section>
                </section>
            </section>
            <section>
                <FooterPage/>
            </section>
        </section>
    );
}

export default Realisations;