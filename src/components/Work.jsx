/**
 * @copyright 2025 Tan Li Lun
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-1.jpg`,
        title: 'Free Portfolio Template',
        tags: ['API', 'SPA'],
        // tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://github.com/tanlilun/port-folio-template'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-2.jpg`,
        title: 'Game Listing App',
        tags: ['API', 'SPA'],
        projectLink: 'https://github.com/tanlilun/Game-Listing-App'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-3.jpg`,
        title: 'iPhone 15 Website',
        tags: ['SPA', 'GSAP'],
        projectLink: 'https://github.com/tanlilun/iPhone15Website'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-4.jpg`,
        title: 'SOLTWIN FD20 & HE350',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://www.solutionengiverse.com.my/'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-5.jpg`,
        title: 'SOLTWIN AP01 & AP02',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://www.solutionengiverse.com.my/'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/project-6.jpg`,
        title: 'SOLTWIN TH01',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://www.solutionengiverse.com.my/'
    },
];

const Work = () => {
    return (
        <section
            id="work"
            className="section"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work