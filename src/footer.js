import { Link } from "react-router-dom";
import Copyright from "./footCopyright";

 function FooterPage(){
        return(
                <section>
                <section className="footmenu row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                        <section className="footmenu-1">
                                <h4>John Doe</h4>
                                <p>40 Rue Laure Diebold</p>
                                <p>69009 Lyon, France</p>
                                <section className="footmenu-icone">
                                        <a href="https://github.com/github-john-doe" title="Lien Github" target="_blank">
                                                <img src="../assets/github.png" alt="Lien github" width={25} height={25}/>
                                        </a>
                                        <a href="https://x.com/"  title="Lien twitter" target="_blank">
                                                <img src="../assets/twitter.png" alt="Lien twitter" width={25} height={25}/>
                                        </a>
                                        <a href="https://www.linkedin.com/" title="Lien Linkedin" target="_blank">
                                                <img src="../assets/linkedin.png" alt="Lien linkedin" width={25} height={25}/>
                                        </a>
                                </section>
                        </section>
                        <section className="footmenu-2" id="link-footer">
                                <h4>Liens utiles</h4>
                                        <ul>
                                                <li><Link to = "/">Accueil</Link></li>
                                                <li><Link to = "/">À propos</Link></li>
                                                <li><Link to = "/services">Services</Link></li>
                                                <li><Link to = "/contact">Me contacter</Link></li>
                                                <li><Link to = "/mentionslegales">Mentions légales</Link></li>
                                        </ul>
                        </section>
                        <section id="link-footer">
                                <h4>Mes dernières réalisations</h4>
                                <ul>
                                        <li><Link to = "/realisations">Fresh food</Link></li>
                                        <li><Link to = "/realisations">Restaurant Akira</Link></li>
                                        <li><Link to = "/realisations">Espace bien-être</Link></li>
                                </ul>
                        </section>
                        <section id="link-footer">
                                <h4>Mes derniers articles</h4>
                                <ul>
                                        <li><Link to = "/blog">Coder son site en HTML/CSS</Link></li>
                                        <li><Link to = "/blog">Vendre ses produits sur le web</Link></li>
                                        <li><Link to = "/blog">Se positionner sur Google</Link></li>
                                </ul>
                        </section>
                </section>
                <Copyright/>
                </section>
                
        );
}
export default FooterPage;