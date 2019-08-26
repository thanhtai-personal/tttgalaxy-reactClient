import React, { PureComponent } from "react";

import './blog.scss'
import $ from 'jquery'

import Sound from 'react-sound'


class Blog extends PureComponent {
    // constructor (props) {
    //   super(props)
    // }

    componentDidMount() {
        $('body').css({
            fontFamily: '"Permanent Marker", cursive',
            margin: '18px 12vw 34px',
            backgroundImage: 'url("./images/paper.jpg")',
            backgroundPosition: 'center top'
        })
    }

    componentWillUnmount() {
        $('body').css({
            background: 'url(https://res.cloudinary.com/di6vua0hr/image/upload/v1562129381/web_images/background_jath9x.png) center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
        })
    }


    render() {
        return (
            <React.Fragment>
                <section id="top" className="uppercase">
                    <nav>
                        <ul>
                            <li><a href="#">Archived</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ">About Me</a></li>
                            <li><a href="/login">Login to my site</a></li>
                        </ul>
                    </nav>
                    <div className="wrapper-bg">
                        <h1 className="generic-bg anim-enter">Thanh Tai Tran</h1>
                        {/* <h1 className="generic-bg anim-enter-abstract-left">Thanh Tai Tran</h1>
                        <h1 className="generic-bg anim-enter-abstract-right">Thanh Tai Tran</h1> */}
                    </div>
                </section>

                <section id="articles-pagination">
                    <div id="articles">
                        <article>
                            <h2 className="uppercase">This is the title</h2>
                            <span className="uppercase">December 19th, 2019</span>
                            <p className="article-preview">Industry limited phenomenon hippie item textile motif cut innovation garment jewelry. Swag inexpensive one-of-a-kind high heels effect Haute-couture jeans cheap price celebrities clothing. Necessity identity apron sleeveless. Signature jersey trendwatching brand industry imagination Haute-couture runway. Sleeveless pret-a-porter look original casual skirt one-of-a-kind limited. Accessory stitching couture model stylish. Stylish contemporary etiquette halter shawl jumper bodice artificial embroidery trade outlet piece brand.</p>
                            <button type="button" name="button" className="generic-bg">Read Full</button>
                        </article>
                        <article>
                            <h2 className="uppercase">This is the title</h2>
                            <span className="uppercase">December 19th, 2019</span>
                            <p className="article-preview">Alpha launch party social proof early adopters marketing direct mailing churn rate advisor disruptive handshake burn rate innovator creative supply chain. Infrastructure supply chain mass market. Entrepreneur technology stock social media metrics social proof beta client leverage seed round rockstar lean startup. Niche market seed money partner network business model canvas innovator social media learning curve beta technology bootstrapping product management network effects MVP market.</p>
                            <button type="button" name="button" className="generic-bg">Read Full</button>
                        </article>
                        <article>
                            <h2 className="uppercase">This is the title</h2>
                            <span className="uppercase">December 19th, 2019</span>
                            <p className="article-preview">Buyer infrastructure user experience seed round innovator conversion long tail gen-z accelerator holy grail termsheet supply chain. Hackathon metrics monetization founders value proposition freemium learning curve lean startup low hanging fruit buyer business-to-business first mover advantage. Lean startup handshake termsheet release ramen direct mailing virality niche market investor business model canvas. Churn rate launch party buzz success strategy customer deployment.</p>
                            <button type="button" name="button" className="generic-bg">Read Full</button>
                        </article>
                        <article>
                            <h2 className="uppercase">This is the title</h2>
                            <span className="uppercase">December 19th, 2019</span>
                            <p className="article-preview">Responsive web design long tail angel investor niche market startup hypotheses. Advisor business-to-consumer scrum project backing iPhone focus founders monetization. Mass market pitch entrepreneur release gamification infographic. User experience alpha infographic advisor backing traction buzz value proposition stealth partner network early adopters innovator product management incubator.</p>
                            <button type="button" name="button" className="generic-bg">Read Full</button>
                        </article>
                    </div>

                    <div id="pagination" className="uppercase big-text">
                        <ul>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">Last</a></li>
                        </ul>
                    </div>
                </section>

                <aside id="sidebar">

                    <img src="./images/stock-photo.jpg" alt="Profile picture" id="profile-picture" />
                    <div id="paragraph-social">
                        <h4>About Me</h4>
                        <p>Instagram mode jeans color handbag apron apparel posture sportswear mainstream. Petticoat collection mode taste showcase skirt attractive bold wholesale.</p>
                        <div id="social-icons">
                            <img src="./images/facebook.png" alt="A facebook icon" onClick={() => {
                                window.open("https://www.facebook.com/tai.tranthanh1604")
                            }} />
                            <img src="./images/twitter.png" alt="A twitter icon" onClick={() => {
                                window.open("https://www.tttgalaxy.co.uk/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ")
                            }} />
                            <img src="./images/tumblr.png" alt="A tumblr icon" onClick={() => {
                                window.open("https://www.tttgalaxy.co.uk/portfolio/public/eyJhbGciOiJIUzI1NiJ9.dGhhbmh0YWkudHR0Z2FsYXh5QGdtYWlsLmNvbQ.6HXR4tCT6aI6aWseNfMAr3CUbVVYeGmsRL4JMC6wzPQ")
                            }} />
                            <img src="./images/linkedin.png" alt="A linkedin icon" onClick={() => {
                                window.open("https://www.linkedin.com/in/tran-thanh-tai-539250129/")
                            }} />
                        </div>
                    </div>
                    <hr />

                    <div id="search">
                        <form>
                            <input type="text" placeholder="Search my blog" className="uppercase generic-bg" />
                            <label className="small-text uppercase">Just hit enter!</label>
                        </form>
                        <img src="./images/search.png" alt="" />
                    </div>

                    <div id="categories">
                        <h3 className="uppercase">Categories</h3>
                        <nav>
                            <ul>
                                <li><a href="#">Coding</a></li>
                                <li><a href="#">Self Help</a></li>
                                <li><a href="#">Life</a></li>
                                <li><a href="#">Relationships</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Food</a></li>
                                <li><a href="#">Other</a></li>
                            </ul>
                        </nav>
                    </div>

                    <hr />
                    <div id="archive">
                        <h3 className="uppercase">Archives</h3>
                        <nav>
                            <ul>
                                <li><a href="#">November</a></li>
                                <li><a href="#">October</a></li>
                                <li><a href="#">September</a></li>
                                <li><a href="#">August</a></li>
                                <li><a href="#">July</a></li>
                                <li><a href="#">June</a></li>
                            </ul>
                        </nav>
                    </div>

                </aside>

                <footer id="footer" className="uppercase">
                    <h4>I am Tai Tran</h4>
                    <h5>Copyright 2019</h5>
                    <a href="#" className="small-text">Back to top</a>
                </footer>
            </React.Fragment>
        )
    }
}

export default Blog