/**
 * @copyright 2025 Tan Li Lun
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        content: 'Tan is ambitious, quick to learn, and incredibly driven. His ability to take on challenges and find resources on his own shows his passion for growth and success.',
        name: 'Yvonne Gan',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-1.jpg`,
        company: 'JGCC'
    },
    {
        content: 'Tan demonstrated strong leadership in our group project, always staying calm and resourceful under pressure. His self-driven attitude and passion for learning made him an invaluable team member.',
        name: 'Billy Wwong Chen Chee',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-2.jpg`,
        company: 'SLB'
    },
    {
        content: 'As a project leader, he was responsible, focused, and organized. He consistently motivated the team, ensuring clear communication and timely completion of tasks.',
        name: 'Guok Choo Ling',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-3.jpg`,
        company: 'JGCC'
    },
    {
        content: 'He always took the initiative to find solutions on his own and led our group with great responsibility. His dedication and problem-solving skills will make him a great asset in any software engineering role.',
        name: 'Aaron Wong',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-4.jpg`,
        company: 'JGCC'
    },
    {
        content: 'Li Lun was always committed to excellence, showcasing his ability to research and learn independently, which will serve him well in his software engineering career.',
        name: 'Yeap Chin Hoong',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-5.jpg`,
        company: 'ViTrox'
    },
    {
        content: 'Tan is incredibly hardworking and quickly mastered software development concepts. Always provide valuable insights.',
        name: 'Aman Shabilin',
        imgSrc: `${import.meta.env.VITE_PATH}/images/people-6.jpg`,
        company: 'Solution Engineering'
    }
];

const Review = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true
            },
            x: '-1000'
        })
    });

    return (
        <section
            id="reviews"
            className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    What my collaborators say
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review