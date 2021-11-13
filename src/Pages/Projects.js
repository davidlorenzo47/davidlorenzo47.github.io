import React from 'react'
import Title from '../Components/Title';
import allBlogs from '../Components/allprojects';

const Projects = () => {
    return (
        <div>
            <div className="b-title">
                <Title title={'Projects'}/>
                {/* <Tittle title={'Domains of Interest'} span={'Services'} /> */} 
                {/* span gives a watermark effect */}
            </div>
            <div className="BlogsPage">
                {
                     // CSS from ../Style/_blogs.scss 
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <a href={blog.link} target="_blank">
                                <img src={blog.image} alt=""/><br/>
                                <a  className="blog-link">
                                    {blog.title}
                                </a>
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Projects

