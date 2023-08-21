import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEducationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> September 2022
                        </p>
                        <h3 className="card-text2">degree in computer engineering</h3>
                        
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> October 2022 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer </h3>
                        <p className="card-text3">building NFT marketplace </p>
                        <p className="card-text4">
                            NJ
                        </p>
                    </div>
                    {/* card2 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' />Fabruary 2022- September 2022
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">Building EHRChain : decentralizing app for maneging health records .</p>
                        <p className="card-text4">
                            NJ
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Experience
