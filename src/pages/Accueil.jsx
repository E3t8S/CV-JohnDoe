import FooterPage from "../footer";
import NavBar from "../nav";

const Accueil = () => {
    return (
       <section>
        <section>
            <NavBar/>
        </section>
        <section className="accueil-1">
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button type="button" class="btn btn-primary">En savoir plus</button>
        </section>
        <section className="apropos">
            <section className="apropos-1">
                <h3>À propos</h3>
                <hr />
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi ma formation d'
                    <strong>intégrateur développeur web</strong> au CEF Au cours de cette formation, j'ai pu acquérir des bases solides 
                    pour travailler dans le domaine du <strong>développement web</strong>.
                    <br/>
                    Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation
                    de <strong>développeur web full stack</strong>.
                    <br/>
                    J'accorde une intention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                
                </p>
            </section>
            <section className="competences">
                <img src="../assets/Doe.jpg" alt="Photo de John Doe travaillant sur ordinateur" width={575}/> 
                <h4>Mes compétences</h4>
                <section className="progressbar-1">
                    <p>HTML5 90%</p>
                    <section class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <section class="progress-bar bg-danger" style={{ width: 517}}></section>
                    </section> <br />
                    <p>CSS3 80%</p>
                    <section class="progress" role="progressbar" aria-label="Info example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <section class="progress-bar bg-info" style={{ width: 460}}></section>
                    </section> <br />
                    <p>JAVASCRIPT 70%</p>
                    <section class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <section class="progress-bar bg-warning" style={{ width: 403}}></section>
                    </section> <br />
                    <p>PHP 60%</p>
                    <section className="progress"  aria-label="Success exampl" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                        <section className="progress-bar bg-success" style={{ width: 345}}></section>
                    </section> <br />
                    <p>REACT 50%</p>
                    <section class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <section class="progress-bar w-50"></section>
                    </section>
                </section>
                
                
                

            </section>
        </section>
        <section>
            <FooterPage/>
        </section>
       </section>
    );
}

export default Accueil;