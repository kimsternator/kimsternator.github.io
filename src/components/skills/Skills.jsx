import "./Skills.scss"
import { useState } from 'react'

export default function Skills () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            title: "Programming Languages",
            icons: [
                {icon: "icons/c++.png", label: "C++"},
                {icon: "icons/python.png", label: "Python"},
                {icon: "icons/c.png", label: "C"},
                {icon: "icons/java.png", label: "Java"},
                {icon: "icons/matlab.png", label: "Matlab"},
                {icon: "icons/julia.png", label: "Julia"},
                {icon: "icons/sql.png", label: "SQL"},
            ],
        },
        {
            id: "2",
            title: "Tools",
            icons: [
                {icon: "icons/tensorflow.png", label: "TensorFlow"},
                {icon: "icons/pytorch.png", label: "PyTorch"},
                {icon: "icons/numpy.png", label: "NumPy"},
                {icon: "icons/pandas.png", label: "Pandas"},
                {icon: "icons/scikit.png", label: "SciKit"},
                {icon: "icons/scipy.png", label: "SciPy"},
            ],
        },
        {
            id: "3",
            title: "Web Development",
            icons: [
                {icon: "icons/html.png", label: "HTML"},
                {icon: "icons/css.png", label: "CSS"},
                {icon: "icons/js.png", label: "JS"},
                {icon: "icons/react.png", label: "React"},
                {icon: "icons/scss.png", label: "SASS/SCSS"},
                {icon: "icons/node.png", label: "Node.js"},
                {icon: "icons/next.png", label: "Next.js"},
                {icon: "icons/flask-logo.png", label: "Flask"},
            ],
        },
        {
            id: "4",
            title: "Technologies",
            icons: [
                {icon: "icons/docker.png", label: "Docker"},
                {icon: "icons/git.png", label: "Git"},
                {icon: "icons/mysql.png", label: "mySQL"},
            ],
        },
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="skills" id="skills">
            <div className="skillsHeader">
                <h1>Skills</h1>
            </div>
            <div className="slider"
                 style={{transform:`translateX(-${currentSlide * 100}vw`}}
            >
                {data.map((d) => (
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="sectionHeader">
                                <h2>{d.title}</h2>
                            </div>
                            <div className="icons">
                                {d.icons.map((icon) => (
                                    <div key={icon.label} className="icon">
                                        <div className="imgContainer">
                                            <img src={icon.icon} alt={icon.label} />
                                        </div>
                                        <h3>{icon.label}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick("right")}
            />
            <a className="next" href="#projects">
                <img src="assets/down.png" alt="arrowDown" />
            </a>
        </div>
    );
}