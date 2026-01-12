import ContactForm from "../contactForm";
import FooterPage from "../footer";
import NavBar from "../nav";

const Contact = () => {
    return (
        <section>
            <section className="couleur">
                <section>
                    <NavBar/>
                </section>
                <section className="pageContact">
                    <section className="presentation">
                        <h2 className="text-uppercase">Me contacter</h2>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formuliare de contact</p>
                        <hr className="hr-rea"/>
                    </section>
                    <section className="contact">
                        <section className="formulaire">
                            <h3>Formulaire de contact</h3>
                            <hr />
                             <ContactForm/> 
                        </section>
                        <section className="formulaire">
                            <h3>Mes coordonnées</h3>
                            <hr />
                            <p>40 rue Laure Dieold, 69009, Lyon, France</p>
                            <p>06 20 30 40 50</p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621793!2d4.796403976132311!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1767801974770!5m2!1sfr!2sfr" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{height:300}}></iframe>
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

export default Contact;