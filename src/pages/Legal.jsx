import FooterPage from "../footer";
import NavBar from "../nav";

const Legal = () => {
    return (
        <section>
            <section>
                <NavBar/>
            </section>
            <section className="presentation-legal">
                <h2 className="text-uppercase">Me contacter</h2>
                <hr className="hr-rea"/>
            </section>
                <section class="accordion accordion-flush" id="accordionFlushExample">
                    <section class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Editeur de site
                            </button>
                        </h2>
                        <section id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <section class="accordion-body">
                                <h3>John Doe</h3>
                                <section className="icone-legal-box">
                                    <section className="icone-legal-box-2">
                                        <p>
                                            <img src="../assets/Legal/position.png" alt="Icône position" className="icone-legal" />
                                        </p>
                                        <p>40 rue Laure Diebold</p>
                                    </section>
                                    <p>69009 Lyon, France</p>
                                    <section className="icone-legal-box-2">
                                        <p>
                                            <img src="../assets/Legal/telephone.png" alt="Icône téléphone" className="icone-legal"/>
                                        </p>
                                        <a href="tel:+33620304050" target="_blank" className="soulignement">06 20 30 40 50</a>
                                    </section>
                                    <section className="icone-legal-box-2">
                                        <p>
                                            <img src="../assets/Legal/enveloppe.png" alt="Icône email" className="icone-legal"/>
                                        </p>
                                        <a href="mailto:john.doe@gmail.com" target="_blank" className="soulignement">john.doe@gmail.com</a>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <section id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <section class="accordion-body">
                                <h3>Always Data</h3>
                                <section className="icone-legal-box">
                                    <p>91 rue du Faubourd Saint Honoré</p>
                                    <p>75008 Paris</p>
                                    <section className="icone-legal-box-2">
                                        <p>
                                            <img src="../assets/Legal/navigateur.png" alt="Icône web" className="icone-legal-nav" />
                                        </p>
                                        <a href="https://www.alwaysdata.com/fr/" target="_blank" className="soulignement">www.alwaysdata.com</a>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <section id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <section class="accordion-body">
                                <h3>Crédits</h3>
                                <section className="icone-legal-box">
                                    <p>Site développé par John Doe, étudiant du CEF</p>
                                    <p>Les images libres de droit sont issues des sites  
                                        <span> &nbsp;
                                            <a href="https://www.flaticon.com/fr/" target="_blank" className="soulignement">Flaticon</a>
                                            &nbsp;et&nbsp;
                                            <a href="https://fr.freepik.com/" className="soulignement">Freepik</a>.
                                        </span>
                                    </p>
                                </section>
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

export default Legal;