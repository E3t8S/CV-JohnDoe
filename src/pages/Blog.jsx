import FooterPage from "../footer";
import NavBar from "../nav";

function Blog(){
    return(
        <section>
            <section>
                <NavBar/>
            </section>
            <section>
                <img className="background" src="../assets/fondbleu.jpg" alt="fond bleu"/>
            </section>
            <section className="presentation">
                <h2 className="text-uppercase">Blog</h2>
                <p>Retrouvez ici quelques articles sur le développement web</p>
                <hr className="hr-rea"/>
            </section>
            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">  
                <section className="col">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/coder.jpg" className="card-img-top" id="card-img-top" alt="Image de code"/>
                        <section className="card-body">
                            <h5 className="card-title">Coder son site en HTML/CSS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section class="card-footer">
                            Publié le 22 Août 2022
                        </section>
                    </section>
                </section>
                 <section className="col">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/vendre.jpg" className="card-img-top" id="card-img-top" alt="Image de vente de produits"/>
                        <section className="card-body">
                            <h5 className="card-title">Vendre ses produits sur le web</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section className="card-footer">
                            Publié le 20 Août 2022
                        </section>
                    </section>
                </section>
                 <section className="col">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/google.jpg" className="card-img-top" id="card-img-top" alt="Image de Google"/>
                        <section className="card-body">
                            <h5 className="card-title">Se positionner sur Google</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section className="card-footer">
                            Publié le 1 Août 2022
                        </section>
                    </section>
                </section>
                 <section className="col">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/responsive.jpg" className="card-img-top" id="card-img-top" alt="Image de responsive design"/>
                        <section className="card-body">
                            <h5 className="card-title">Coder en responsive design</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section className="card-footer">
                            Publié le 31 Juillet 2022
                        </section>
                    </section>
                </section>
                 <section className="col">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/SEOblog.jpg" className="card-img-top" id="card-img-top" alt="Image de référencement naturel"/>
                        <section className="card-body">
                            <h5 className="card-title">Techniques de référencement</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section className="card-footer">
                            Publié le 30 Juillet 2022
                        </section>
                    </section>
                </section>
                 <section className="col" id="blog-card-final">
                    <section className="card" id="blog-card">
                        <img src="../assets/blog/learnTo.jpg" className="card-img-top" id="card-img-top" alt="Image de langages de développement web"/>
                        <section className="card-body">
                            <h5 className="card-title">Apprendre à coder</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the 
                                bulk of the card’s content.</p>
                            <a href="#" className="btn btn-primary">Lire la suite</a>
                        </section>
                        <section className="card-footer">
                            Publié le 12 juillet 2022
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

export default Blog;