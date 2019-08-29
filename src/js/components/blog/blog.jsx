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
        // const { props: { novelData } } = this
        const novelData = [
            {
                chapterNumber: 1,
                publishDate: '29/08/2019',
                content: 'Industry limited phenomenon hippie item textile motif cut innovation garment jewelry. Swag inexpensive one-of-a-kind high heels effect Haute-couture jeans cheap price celebrities clothing. Necessity identity apron sleeveless. Signature jersey trend watching brand industry imagination Haute-couture runway. Sleeveless pret-a-porter look original casual skirt one-of-a-kind limited. Accessory stitching couture model stylish. Stylish contemporary etiquette halter shawl jumper bodice artificial embroidery trade outlet piece brand'
            },
            {
                chapterNumber: 2,
                publishDate: '29/08/2019',
                content: 'Industry limited phenomenon hippie item textile motif cut innovation garment jewelry. Swag inexpensive one-of-a-kind high heels effect Haute-couture jeans cheap price celebrities clothing. Necessity identity apron sleeveless. Signature jersey trend watching brand industry imagination Haute-couture runway. Sleeveless pret-a-porter look original casual skirt one-of-a-kind limited. Accessory stitching couture model stylish. Stylish contemporary etiquette halter shawl jumper bodice artificial embroidery trade outlet piece brand'
            },
            {
                chapterNumber: 3,
                publishDate: '29/08/2019',
                content: 'Industry limited phenomenon hippie item textile motif cut innovation garment jewelry. Swag inexpensive one-of-a-kind high heels effect Haute-couture jeans cheap price celebrities clothing. Necessity identity apron sleeveless. Signature jersey trend watching brand industry imagination Haute-couture runway. Sleeveless pret-a-porter look original casual skirt one-of-a-kind limited. Accessory stitching couture model stylish. Stylish contemporary etiquette halter shawl jumper bodice artificial embroidery trade outlet piece brand'
            },
            {
                chapterNumber: 4,
                publishDate: '29/08/2019',
                content: 'Industry limited phenomenon hippie item textile motif cut innovation garment jewelry. Swag inexpensive one-of-a-kind high heels effect Haute-couture jeans cheap price celebrities clothing. Necessity identity apron sleeveless. Signature jersey trend watching brand industry imagination Haute-couture runway. Sleeveless pret-a-porter look original casual skirt one-of-a-kind limited. Accessory stitching couture model stylish. Stylish contemporary etiquette halter shawl jumper bodice artificial embroidery trade outlet piece brand'
            }
        ]
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
                        <h1 className="generic-bg anim-enter">TTT GALAXY</h1>
                    </div>
                </section>

                <section id="articles-pagination">
                    <h1 className="generic-bg anim-enter">Tru Tiên Tiểu Phàm trùng sinh</h1>
                    <div id="articles">
                        {((novel) => {
                            return novel.map((nov) => {
                                return (<article>
                                    <h2 className="uppercase">{`Chương ${nov.chapterNumber} - ${nov.chapterTitle}`}</h2>
                                    <span className="uppercase">{nov.publishDate}</span>
                                    <p className="article-preview">{nov.content}</p>
                                    <button type="button" name="button" className="generic-bg">Read Full</button>
                                </article>)
                            })
                        })(novelData)}
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
                            <input type="text" defaultValue='Để chơi thôi mấy bạn :)' placeholder="Search my blog" className="uppercase generic-bg" />
                            <label className="small-text uppercase">Có gì đâu mà tìm.</label>
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