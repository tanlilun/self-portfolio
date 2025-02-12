/**
 * @copyright 2025 Tan Li Lun
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    // {
    //     imgSrc: `${import.meta.env.VITE_PATH}/images/figma.svg`,
    //     label: 'Figma',
    //     desc: 'Design tool'
    // },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/react.svg`,
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/javascript.svg`,
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/css3.svg`,
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/tailwindcss.svg`,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/nodejs.svg`,
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: `${import.meta.env.VITE_PATH}/images/mysql.svg`,
        label: 'MySQL',
        desc: 'Database'
    },
    // {
    //     imgSrc: `${import.meta.env.VITE_PATH}/images/mongodb.svg`,
    //     label: 'MongoDB',
    //     desc: 'Database'
    // },
    // {
    //     imgSrc: `${import.meta.env.VITE_PATH}/images/expressjs.svg`,
    //     label: 'ExpressJS',
    //     desc: 'Node Framework'
    // },
];

const Skill = () => {
    return (
        <section className='section'>
            <div className='container'>
                <h2 className='headline-2 reveal-up'>
                    Essential Tools I use
                </h2>
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill