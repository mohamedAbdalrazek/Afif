import React from "react";
export default function Services() {
    const [section, setSection] = React.useState(1);
    const superData = [
        {
            src:"super1",
            header:"Monitor your children",
            paragraph:"The internet is a safe place for children if we monitor them."
        },
        {
            src:"super2",
            header:"Keep internet risks low",
            paragraph:"Do not leave your child alone on the internet, as there are many risks."
        },
        {
            src:"super3",
            header:"Guide your children",
            paragraph:"Know what your child is doing on the internet and talk to them about the dangers of harmful content."
        }
    ]
    const userData = [
        {
            src:"user1",
            header:"Safe Browsing for Your Mental and Emotional Well-being",
            paragraph:"Our app helps you avoid harmful content, ensuring a secure online environment for internet and social media usage."
        },
        {
            src:"user2",
            header:"Enhancing Digital Safety",
            paragraph:"Say no to harmful content; our app promotes a positive and safe online experience for everyone."
        },
        {
            src:"user3",
            header:"Protection",
            paragraph:"Enjoy a secure experience on our app, shielding you from explicit and violent content."
        }
    ]
    const superSections = superData.map((section)=>{
        return(
            <div>
                <img src={require(`../images/${section.src}.png`)} />
                <h3>{section.header}</h3>
                <p>{section.paragraph}</p>
            </div>
        )
    })
    const activeStyle ={
        backgroundColor:"#52BC9A",
        color:"white"
    }
    const userSections = userData.map((section)=>{
        return(
            <div>
                <img src={require(`../images/${section.src}.png`)} />
                <h3>{section.header}</h3>
                <p>{section.paragraph}</p>
            </div>
        )
    })
    return (
        <div className="services" id="services">
            <h1 className="special-heading">
                Services
            </h1>
            {/* <div className="option">
                <span onClick={()=>setSection(1)} style={section===1 ? activeStyle :{}}>Supervisor</span>
                <span onClick={()=>setSection(2)} style={section===2 ? activeStyle :{}}>User</span>
            </div> */}
            {section === 1 ? (
                <div className="main-section super">
                    {superSections}
                </div>
            ) : (
                <div className="main-section user">
                    {userSections}
                </div>
            )}
        </div>
    );
}
