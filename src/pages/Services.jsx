import FooterPage from "../footer";
import NavBar from "../nav";

const Services = () => {
    return (
        <section className="App">
            <section>
                <NavBar/>
            </section>
            <section>
                <img className="background" src="../assets/fondbleu.jpg" alt="fond bleu"/>
            </section>
            <section className="presentation">
                <h2 className="text-uppercase">Mon offre de services</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir</p>
                <hr className="hr-rea"/>
            </section>
            <section className="card-services row row-cols-1 row-cols-lg-3 g-4">
                <section className="card align-items-center" id="card-3" style={{width: 400, height: 400}}>
                    <img src="../assets/services/UX.png" className="card-img-top" alt="Image de mon service UX Design" style={{width:40}}/>
                    <section className="card-body">
                        <h4 className="card-title text-uppercase">UX Design</h4>
                        <p className="card-text">
                            L' <strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                            Son but est d'offrir une expérience de navigation optimale à l'internaute.
                        </p>
                    </section>
                </section>
                <section className="card align-items-center" id="card-3" style={{width: 400, height: 400}}>
                    <img src="../assets/services/devweb.png" className="card-img-top" alt="Image de mon service développement web" style={{width:40}}/>
                    <section className="card-body">
                        <h4 className="card-title text-uppercase">Développement Web</h4>
                        <p className="card-text">
                            Le <strong>Développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, 
                            JavaScript et PHP.
                        </p>
                    </section>
                </section>
                <section className="card align-items-center" id="card-3" style={{width: 400, height: 400}}>
                    <img src="../assets/services/SEO.png" className="card-img-top" alt="Image de mon service SEO" style={{width:40}}/>
                    <section className="card-body">
                        <h4 className="card-title text-uppercase">Référencement</h4>
                        <p className="card-text">
                            Le <strong>référencement naturel d'un site web</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer
                            sa position dans les résultats des moteurs de recherche.
                        </p>
                    </section>
                </section>
            </section>
            <section>
                <FooterPage/>
            </section>
        </section>
    );
}

export default Services;