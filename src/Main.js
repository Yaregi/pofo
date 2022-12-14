import $ from 'jquery';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';
import './Main.css';

gsap.registerPlugin(ScrollTrigger)


const Main = () => {

    useEffect(() => {
        AOS.init();

        gsap.to('video', {
            scale: 1.2,
            duration: 6,
            scrollTrigger: {
                trigger: '.son',
                start: 'bottom 40%;',
                end: 'bottom 20%',
                toggleActions: 'restart none none none',
                scrub: 4,
            }
        })


        gsap.to('.tits', {
            scale: 1.35,
            duration: 6,
            scrollTrigger: {
                trigger: '.tits',
                start: 'top 80%;',
                end: 'top 50%',
                toggleActions: 'restart none none none',
                scrub: 4,
            }
        })

        gsap.to('.page5 .tit', {
            translateX: 0,
            duration: 6,
            scrollTrigger: {
                trigger: '.page5',
                start: 'top 100%;',
                end: 'top 90%',
                toggleActions: 'restart none none none',
                scrub: 4,
            }
        })
    });




    $(function () {

        let winHeight = $(window).height();

        let page4 = $('.page4 .tbox');
        let page6 = $('.page6 .tbox');
        let p2_offset = $('.page2').offset().top;
        let p3_offset = $('.page3').offset().top;
        let p4_offset = $('.page4').offset().top;
        let p5_offset = $('.page5').offset().top;
        let p6_offset = $('.page6').offset().top;
        let p7_offset = $('.page7').offset().top;


        $(window).on('resize', function () {
            winHeight = $(window).height();
        });




        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p4_offset) {
                page4.stop().addClass('fix')

            }
            else {
                page4.stop().removeClass('fix')

            }

        })

        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p6_offset * 1.078) {
                page6.stop().addClass('fix')
            } else {
                page6.stop().removeClass('fix')
            }

        })

        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p7_offset * 1.2) {
                $('.tit text').css('display', 'block');
            }
        })
        let f = 0;
        $('div#pcWallpaper .page4 .bgbox:nth-child(1)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;
        });



        $('div#pcWallpaper .page4 .bgbox:nth-child(2)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;

        });

        $('div#pcWallpaper .page4 .bgbox:nth-child(3)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;
            console.log(f);
        });


        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(1) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('DONG-A PHARM')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY')
            $('div#pcWallpaper>.page4 .tit p').text('4 DAY DESIGN / 4 DAY PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://dpharm.netlify.app/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'none');
        })

        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(2) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('COUNTRY TOUR')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY')
            $('div#pcWallpaper>.page4 .tit p').text('1 WEEK DESIGN / 1 WEEK PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://sigoltour.netlify.app/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'block');
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/g1.jpg');
            $('div#pcWallpaper>.bbgtit>.img1 a').attr('href', 'https://yaregi.github.io/nintendo/');
        })

        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(3) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('NINTENDO SHOP')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY/REACT')
            $('div#pcWallpaper>.page4 .tit p').text('1 WEEK DESIGN / 9 DAY PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://yaregi.github.io/nintendo/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'block');
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/g2.jpg');
            $('div#pcWallpaper>.bbgtit>.img1 a').attr('href', 'https://yaregi.github.io/nintendo/');
        })

        $('div#pcWallpaper>.page4 .tit ul li:nth-child(2) a').on('click', function (e) {
            e.preventDefault();
            $('div#pcWallpaper>.bbg').fadeIn();
            $('div#pcWallpaper>.bbgtit').fadeIn();
            $('div#pcWallpaper>.bbgtit>.img1 img').fadeIn();
        })


        $('div#pcWallpaper>.bbg').on('click', function () {
            $(this).css('display', 'none');
            $('div#pcWallpaper>.bbgtit').css('display', 'none');
            $('div#pcWallpaper>.dl').css('display', 'none');
        })

        $('div#pcWallpaper>.page6 .tit a').on('click', function (e) {
            e.preventDefault();
            $('div#pcWallpaper>.bbg').fadeIn();
            $('div#pcWallpaper>.bbgtit').fadeIn();
            $('div#pcWallpaper>.dl').fadeIn();
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/mock.jpg').fadeIn();
        })

    })

    return (

        <div id='pcWallpaper'>
            <div id='intro'>
                <h1 className='tit'>
                    WELCOME MY PORTFOLIO
                </h1>
            </div>

            <div id='1' className='page1'>
                <div className='title'>
                    <p>???????????????</p>
                    <p>?????? ?????????????????? ????????? ???????????????! ???????????? ????????? ???????????? ???????????????</p>
                    <p>?????? ?????? ??? ???????????? ??????????????????. ?????????????????? ????????? ????????? ?????? ????????????</p>
                    <p>???????????? ??????????????? ????????????. ???????????????!</p>
                </div>
                <div className='util'>
                    <ul>
                        <li><Link to='1' spy={true} ><a href="#">HOME</a></Link></li>
                        <li><Link to='2' spy={true}><a href="#">ABOUT</a></Link></li>
                        <li><Link to='3' spy={true}><a href="#">PORTFOLIO</a></Link></li>
                        <li><Link to='4' spy={true}><a href="#">UX / UI</a></Link></li>
                        <li><Link to='5' spy={true}><a href="#">BOOK</a></Link></li>
                        <li><Link to='6' spy={true} ><a href="#">EPILOGUE</a></Link></li>
                    </ul>
                </div>
                <video autoPlay loop muted>
                    <source src='./video.mp4' type='video/mp4'></source>
                </video>
                <div className='title-box'>
                    <h1>2022 PORTFOLIO BY CHOI HYEON YOUNG</h1>
                </div>
                <div className='text-box' >
                    <h1>PORTFOLIO</h1>

                </div>

                <div className='scrolldown'>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='page2'>
                <div className='bg'></div>
                <svg className="son" width="357" height="980" viewBox="0 0 357 422"
                >
                    <text x="140" y="40%" >I</text>
                    <text x="100" y="50%" >A</text>
                    <text x="60" y="60%" >M</text>
                    <text x="100" y="70%">D</text>
                    <text x="140" y="80%">E</text>
                    <text x="180" y="90%">V</text>
                    <text x="220" y="100%">E</text>
                    <text x="180" y="110%">L</text>
                    <text x="140" y="120%">O</text>
                    <text x="100" y="130%">P</text>
                    <text x="60" y="140%">E</text>
                    <text x="100" y="150%">R</text>
                    <text x="140" y="160%">S</text>

                </svg>
            </div>

            <div className='page3'>
                <div className='bg'>
                    <div className='tits' >
                        <h1>???????????? ??????????????? ???????????????</h1>
                        <h1>?????? ????????? ????????? ??????????????? ?????? ???????????? ???????????????</h1>
                    </div>
                    <div id='2' className='about' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="50">
                        <h1>ABOUT ME</h1>

                        <div className='this'>
                            <div className='me'>
                                <div className='photo'>
                                    <img src='./img/photo.jpg'></img>
                                </div>
                                <div className='s'>
                                    <p>????????? CHOI HYEON YOUNG</p>
                                    <p>1996.07.15</p>
                                    <p>roi156@naver.com</p>
                                </div>
                                <div className='z'>
                                    <p>2022 NCS ???????????? - ??? ???????????? ?????? ??????</p>
                                    <p>2021 ??????????????? ????????????????????? ??????</p>
                                    <p>2018 ??????????????? ????????????????????? ??????</p>
                                </div>
                            </div>
                            <div className='skill'>
                                <ul>
                                    <li>
                                        <h1>01</h1>
                                        <h2>WEB PUBLISHING</h2>
                                        <p>HTML,CSS??? ???????????? ?????? 8??? ??? SCSS??? ???????????? ????????????. CSS ????????? ID ???????????? ???????????? IMPORTANT ????????? ???????????? ?????? ????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <h1>02</h1>
                                        <h2>OPEN SOURCE / LIBRARY</h2>
                                        <p>?????? ?????? ??????????????? ????????? REACT.JS??? ???????????? ???????????? ??? ?????????????????? ????????? ????????? ???????????????.</p>
                                    </li>
                                    <li>
                                        <h1>03</h1>
                                        <h2>PHOTO SHOP / ILLUSTRATOR</h2>
                                        <p>???????????? ???????????????????????? ???????????? ????????? ???????????? ????????? ????????? ??? ????????? ????????? ??? ??? ????????????.</p>
                                    </li>
                                    <li>
                                        <h1>04</h1>
                                        <h2>JAVA SCRIPT / JQUERY / REACT</h2>
                                        <p>???????????? ????????? ???????????? ?????? ??? ??????????????? ????????? ???????????????. ????????? ???????????? REACT??? ????????? ??? ?????? ??????????????? ????????? REACT??? ???????????? ?????? ????????? ???????????? ???????????? ????????? ???????????? ????????????.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id='3' className='page4'>
                <span></span>
                <div className='tbox'>
                    <div className='txt'>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className='tit'>
                        <h1>DONG-A PHARM</h1>
                        <h2>WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY</h2>
                        <p >4 DAY DESIGN / 4 DAY PUBLISHING</p>

                        <ul>
                            <li> <a href="https://dpharm.netlify.app/">WEB VIEW</a> </li>
                            <li> <a href="#">VIEW PROCESS</a> </li>
                        </ul>
                    </div>

                </div>
                <div className='bg'>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img1.png"></img></a>
                        <span></span>
                    </div>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img3.png"></img></a>
                        <span></span>
                    </div>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img2.png"></img></a>
                        <span></span>
                    </div>

                </div>
            </div>
            <div id='4' className='page5'>
                <div className='tit'>
                    <h1>MOBILE APP UI</h1>
                    <p>Rustic Day</p>
                    <p>Responsive app ui design and site creating</p>
                    <a href='https://rusticday.netlify.app/'>WEB VIEW</a>
                </div>
                <div className='img'>
                    <div className='bg1' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        <img src='./img/ui1.png'></img>
                    </div>
                    <div className='bg2' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <img src='./img/ui2.png'></img>
                    </div>
                    <div className='bg3' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600">
                        <img src='./img/ui3.png'></img>
                    </div>
                </div>

            </div>
            <div id='5' className='page6'>
                <div className='bookimg'>
                    <img src='./img/book1.png'></img>
                </div>
                <div className='tbox'>
                    <div className='txt'>
                        <p>BOOK</p>
                    </div>
                    <div className='tit'>
                        <h1>TRADE KOREA</h1>
                        <h2>PHOTOSHOP/ILLUSTRATOR</h2>
                        <p>2018???, ?????????????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ????????? ?????????????????????.</p>

                        <a href="#">VIEW PROCESS</a>
                    </div>
                </div>
            </div>
            <div id='6' className='page7'>
                <svg className="tit" width="60%" height="auto" viewBox="0 0 "
                >
                    <text x="320" y="30%" >T</text>
                    <text x="420" y="30%" >H</text>
                    <text x="520" y="30%" >A</text>
                    <text x="620" y="30%">N</text>
                    <text x="720" y="30%">K</text>
                    <text x="410" y="45%">F</text>
                    <text x="510" y="45%">O</text>
                    <text x="610" y="45%">R</text>
                    <text x="180" y="60%">V</text>
                    <text x="280" y="60%">I</text>
                    <text x="380" y="60%">S</text>
                    <text x="480" y="60%">I</text>
                    <text x="580" y="60%">T</text>
                    <text x="680" y="60%">I</text>
                    <text x="780" y="60%">N</text>
                    <text x="880" y="60%">G</text>
                </svg>
                <div className='txt'>
                    <h2>??? ??? ??????????????? ???????????????. ???????????? ????????? ????????????????????????.</h2>
                    <h2>?????????????????? ?????? ??????????????? ??????????????? ?????? ??????</h2>
                    <h2>??????????????? ????????? ?????? ???????????????????????????. ???????????????!</h2>
                </div>
                <div className='mail'>
                    <p>E-MAIL : roi156@naver.com </p>
                    <p>+82 010-9120-939X</p>
                </div>
            </div>
            {/*  <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            >
            </motion.div> */}

            <div className='bbg'>
            </div>
            <div className='dl'>
                <a href="./img/book.pdf" download='book'>PDF ????????????</a>
            </div>
            <div className='bbgtit'>
                <div className='img'>
                    <img src='./img/mock.jpg'></img>
                </div>
                <div className='img1'>
                    <img src='./img/g1.jpg'></img>
                    <a href="https://sigoltour.netlify.app/"></a>
                </div>
            </div>

        </div >

    )
}

export default React.memo(Main);



