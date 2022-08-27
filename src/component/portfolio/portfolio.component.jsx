import React from "react";
import './portfolio.styles.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


const data=[
    {
        id: 1,
        image: IMG6,
        title: 'Tech website',
        github: 'https://github.com/Kartikay123/reservet',
        demo: 'https://tech-site-01.netlify.app',

    },
    {
        id: 2,
        image: IMG2,
        title: 'E-commerce',
        github: 'https://github.com/Gaganshukla01/foodwebsite',
        demo: 'https://react-e-commerce-project123.netlify.app/',

    },
    {
        id: 3,
        image: IMG5,
        title: 'To do website',
        github: 'https://github.com/Gaganshukla01/todolist',
        demo: 'https://chractershifter.netlify.app',

    },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'My Portfolio',
    //     github: 'https://github.com/Kartikay123/reservet',
    //     demo: 'https://reservet.netlify.app/',

    // }

]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h4>My Recent Work</h4>
            <h2>Projects</h2>
            <div className="container portfolio-container">

            {
                data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id}className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={image} alt={title}/>
                    </div>
                    <h3 className="kkk">{title}</h3>
                    <div className="portfolio-item-cta">
                    <a href={github} className="btn" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                       

                </article>
                    )
                })
            }


                {/* <article className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={IMG1} alt="Unknown"/>
                    </div>
                    <h3>Smart India Hackathon(2022)</h3>
                    <div className="portfolio-item-cta">
                    <a href="https://github.com/Kartikay123/reservet" className="btn" target='_blank'>Github</a>
                        <a href="https://reservet.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article> */}


                {/* <article className='portfolio-item'>
                    <div className="portfolio-item-image">
                       <img src={IMG1} alt="Unknown"/>
                    </div>
                    <h3>Smart India Hackathon(2022)</h3>
                    <div className="portfolio-item-cta">
                    <a href="https://github.com/Kartikay123/reservet" className="btn" target='_blank'>Github</a>
                        <a href="https://reservet.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article> */}

            </div>
        </section>
    );
}
export default Portfolio;
