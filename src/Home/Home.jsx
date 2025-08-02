import { useState, useEffect } from 'react';

import { FaStar } from "react-icons/fa6";



import logo from '../assets/Sub Heading.png';
import profile1 from '../assets/profile.png';
import experience from '../assets/experience.png'
import profile2 from '../assets/profile2.png';

import gal1 from '../assets/Group 96.png';
import gal2 from '../assets/Group 97.png';
import gal3 from '../assets/Group98.png';
import icon1 from '../assets/Group 74.png';
import icon2 from '../assets/Group 75.png';
import icon3 from '../assets/Group 76.png';
import frame1 from '../assets/Frame 2.png';
import frame2 from '../assets/Frame 3.png';
import frame3 from '../assets/Frame 4.png';
import frame4 from '../assets/Frame 5.png';
import product1 from '../assets/product1 (2).png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png'
import group1 from '../assets/Group 11.png';
import group2 from '../assets/Group 12.png';
import group3 from '../assets/Group 13.png';
import group4 from '../assets/Group 14.png';
import group5 from '../assets/Group 15.png';
import group6 from '../assets/Group 16.png';
import group7 from '../assets/Group 8.png';
import group8 from '../assets/Group 9.png';
import group9 from '../assets/Group 22.png';
import group10 from '../assets/Group 23.png';
import group11 from '../assets/Group 17.png';
import group12 from '../assets/Group 10.png';
import group13 from '../assets/Group 8.png';
import group14 from '../assets/Group 9.png';
import group15 from '../assets/Group 10.png';
import group16 from '../assets/Group 18.png';
import group17 from '../assets/Group 19.png';
import group18 from '../assets/Group 20.png';
import group19 from '../assets/Group 21.png';
import group20 from '../assets/Group 22.png';
import group21 from '../assets/Group 23.png';
import group22 from '../assets/Group 24.png';
import group23 from '../assets/Group 25.png';
import group24 from '../assets/Group 26.png';
import group25 from '../assets/Group 27.png';
import group26 from '../assets/Group 28.png';
import group27 from '../assets/Group 29.png';
import group28 from '../assets/Group 30.png';
import group29 from '../assets/Group 31.png';
import group30 from '../assets/Group 32.png';
import group31 from '../assets/Group 33.png';
import group32 from '../assets/Group 34.png';
import blog1 from '../assets/product1.png'
import blog2 from '../assets/blog1.png';
import blog3 from '../assets/blog3.png';
import v1 from '../assets/vector1.png';
import v2 from '../assets/vector2.png';
import v3 from '../assets/vector3.png';
import v4 from '../assets/vector4.png';



import { BsArrowReturnRight } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BsEyeFill } from "react-icons/bs";




import '../Home/Home.css';

const cards = [
    {
        title: 'WE ARE',
        icon: icon2,
        image: gal1,
        points: [
            { text: 'A leading Insurance Consultancy', icon: <FaStar /> },
            { text: '4.5+ years of experience in delivering insurance solutions to 250+ SME & Mid Corporates and more than 10,000 Lives cumulatively', icon: <FaStar /> },
            { text: 'A collective experience of 30+ years in Insurance', icon: <FaStar /> },
            { text: 'Knowledge-driven Organization', icon: <FaStar /> },
        ],
    },
    {
        title: 'WE PROVIDE',
        icon: icon1,
        image: gal2,
        points: [
            { text: 'Insurance and Risk Management', icon: <FaStar />, },
            { text: 'Insurance Consulting', icon: <FaStar /> },
            { text: 'Manage Claims', icon: <FaStar /> },
        ],
    },
    {
        title: 'TO WHOM',
        icon: icon3,
        image: gal3,
        points: [
            { text: 'Corporates', icon: <FaStar /> },
            { text: 'SME & Mid Corporates', icon: <FaStar /> },
            { text: 'Retail', icon: <FaStar /> },
            { text: "Freight Forwarders / CHA's", icon: <FaStar /> },
        ],
    },
];


function Stat({ end, label }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const incrementTime = 20;
        const totalIncrements = duration / incrementTime;
        const increment = end / totalIncrements;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.ceil(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <div className="stat-item">
            <h2 className="stat-number">{count.toLocaleString()}+</h2>
            <p className="stat-label">{label}</p>
        </div>
    );
}
function Home() {
    const row1Images = [group1, group2, group3, group4, group5, group6, group13, group14, group15, group16, group17, group18, group19, group20, group21, group22];
    const row2Images = [group7, group8, group9, group10, group11, group12, group32, group31, group23, group24, group25, group26, group27, group28, group29, group30];
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [industry, setIndustry] = useState('');
    const [message, setMessage] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <section style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        {/* Content section: always visible */}
                        <div id='conSm' className="col-12 col-lg-6">
                            <div className="img-container">
                                <img src={logo} alt="heading" />
                                <div className="text-container mt-3">
                                    <p>Comprehensive</p>
                                    <p style={{ whiteSpace: 'nowrap' }}>Insurance Solutions</p>
                                    <div className="para-container">
                                        <span>
                                            InnovGen Insurance is a complete general insurance consultancy providing comprehensive solutions to SME & MSME segments with 15+ years of expertise.
                                        </span>
                                    </div>
                                    <div className="btn-container mt-3">
                                        <button>
                                            Explore Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Images section: visible only on large screens and up */}
                        <div className="col-12 col-lg-6 d-none d-lg-flex">
                            <div className="img-containers d-flex">
                                <div style={{ marginRight: '30px' }}>
                                    <img className="profile1" src={profile1} alt="profile1" style={{ width: '320px', height: '240px' }} />
                                    <img className="exp mt-2" src={experience} alt="experience" />
                                </div>
                                <div>
                                    <img className="profile2" src={profile2} alt="profile2" style={{ width: '321px', height: '476px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='stats-bar'>
                <div className='container'>
                    <div className="stats-banner1">
                        <Stat end={250} label="SME Clients" />
                        <div className="divider"></div>
                        <Stat end={10000} label="Lives Covered" />
                        <div className="divider"></div>
                        <Stat end={15} label="Years Experience" />
                    </div>
                </div>
            </section>

            <section className='ab-container'>
                <div className='a-container'>
                    <div className='about-container'>
                        <span className='abt'>About </span>
                        <span className='innov'>InnovGen</span>
                        <div className='abt-para'>
                            <p>A leading Consultancy with extensive experience in delivering</p>
                            <p>comprehensive insurance solutions to businesses and individuals</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ab1-container'>
                <div className="container" style={{ marginTop: '50px' }}>
                    <div className="d-flex flex-wrap gallery-row" id="ab3" style={{ gap: '24px' }}>
                        {cards.map((card, cardIndex) => (
                            <div
                                className="gallery-card"
                                key={cardIndex}
                                style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    width: '367px',
                                    height: '470px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    color: '#fff',
                                    flex: '1 1 300px',
                                }}
                            >
                                <div
                                    className="overlay-content"
                                    style={{
                                        padding: '20px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <h5 style={{ position: 'relative', left: '80px', bottom: '10px' }}>
                                            {card.title}
                                        </h5>
                                        <div className="icon-box" style={{ marginLeft: '10px' }}>
                                            <img
                                                src={card.icon}
                                                alt="icon"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    marginLeft: '30px',
                                                    marginBottom: '20px',
                                                    borderRadius: '5px',

                                                }}
                                            />
                                        </div>
                                    </div>

                                    <ul
                                        style={{
                                            paddingLeft: '20px',
                                            marginTop: '20px',
                                            width: '296px',
                                        }}
                                    >
                                        {card.points.map((point, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#FFFFFF',
                                                    fontWeight: 700,
                                                    fontSize: '16px',
                                                    letterSpacing: '0px',
                                                    lineHeight: '2.2',
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    width: '276px',
                                                    marginBottom: '14px',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        marginRight: '8px',
                                                        color: '#EA580C',
                                                        position: 'relative',
                                                        bottom:
                                                            cardIndex === 0 && idx === 0 ? '17px' :
                                                                cardIndex === 0 && idx === 1 ? '70px' :
                                                                    cardIndex === 0 && idx === 2 ? '17px' :

                                                                        cardIndex === 0 && idx === 1 ? '32px' :
                                                                            cardIndex === 1 && idx === 0 ? '17px' : cardIndex === 2 ? '0px' : '0px',
                                                    }}
                                                >
                                                    {point.icon}
                                                </span>
                                                {point.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className='mission'>
                <div className='container' id='mission'>
                    <div className='mission-container'>
                        <h4>Our Mission</h4>
                        <p>Our focus on customer's needs is to reduce the gap between the Insurers and the customers, which will help in provide integrated solutions for Insurance and Risk advisory.</p>
                    </div>
                </div>
            </section>



            <section className='service-container' >
                <div id="service-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="s1">What</span><span className="s2">We</span><span className="s3">Do</span>
                    </div>
                    <div className="container" id="imgcard">
                        <div className="row  xxl-gap-10">
                            <div className="col-12 col-md-6 col-lg-3">
                                <img src={frame1} alt="img" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <img src={frame2} alt="img" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <img src={frame3} alt="img" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <img src={frame4} alt="img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className='product-container'>
                <div className='container'>
                    <div className='products'>
                        <h4 className='ps1'>Products</h4>
                        <h4 className='ps2'>Offered</h4>
                    </div>
                    {[
                        {
                            title: 'ASSETS',
                            image: product1,
                            items: [
                                'Fire & Burglary Insurance',
                                'Marine Insurance',
                                'Motor / Fleet Insurance',
                                'Industrial All Risk Policy',
                                'Machinery Breakdown',
                                'Electronic Equipment',
                            ],
                        },
                        {
                            title: 'EMPLOYEE BENEFITS',
                            image: product2,
                            items: [
                                'Group Mediclaim',
                                'Group Personal Accident',
                                'Corporate Travel Insurance',
                                'Individual Health',
                                'Employee Compensation Insurance',
                            ],
                        },
                        {
                            title: 'ENGINEERING & INFRASTRUCTURE',
                            image: product4,
                            items: [
                                'Contractor All Risk Policy',
                                'Marine / Storage Policy',
                                'Erection Policy',
                                'Contractor Plant and Machinery',
                            ],
                        },
                        {
                            title: 'LIABILITY & MISCELLANEOUS INSURANCE',
                            image: product3,
                            items: [
                                'Professional Indemnity',
                                'Directors & Officers Policy',
                                'Error & Omission',
                                'Cyber Crime',
                                'Product Liability',
                                'Commercial General Liability',
                                'Event Insurance',
                            ],
                        },
                    ].map((section, index) => (
                        <div
                            key={index}
                            className="row gx-4 gy-5 mb-5 align-items-start"
                            style={{ marginTop: '50px' }}
                        >
                            {/* Title Block */}
                            <div
                                className="col-lg-3 col-md-12 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start"
                                style={{ marginBottom: '20px' }}
                            >
                                <TfiLayoutLineSolid
                                    style={{ fontSize: '30px', color: '#D0DBFF' }}
                                />
                                <h5
                                    className="fw-bold text-uppercase mt-2"
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        fontFamily: "'DM Sans', sans-serif",
                                        color: '#1E3A8A',
                                        maxWidth: '220px',
                                    }}
                                >
                                    {section.title}
                                </h5>
                            </div>

                            {/* Image */}
                            <div className="col-lg-4 col-md-6 d-flex justify-content-md-start justify-content-center">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="img-fluid"
                                    style={{
                                        maxHeight: '215px',
                                        marginLeft: '0px',
                                    }}
                                />
                            </div>

                            {/* Item List */}
                            <div className="col-lg-5 col-md-6 desktop-shift">
                                <div
                                    className="d-flex flex-column gap-2"
                                    style={{
                                        marginLeft: '0px',
                                    }}
                                >
                                    {section.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                color: '#828284',
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <BsArrowReturnRight
                                                className="me-2"
                                                style={{
                                                    color: '#003061',
                                                    height: '14px',
                                                    width: '14px',
                                                }}
                                            />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section >


            <section id='bg-d' style={{ backgroundColor: '#223466', display: 'flex', alignItems: 'center', }}>
                <div className='container' >
                    <div className='abt-container'>
                        <div style={{ textAlign: 'center' }}>
                            <span className='ab1'>Our</span><span className='ab2'>Clients</span>
                        </div>
                        <div className='abt-p' style={{ textAlign: 'center', marginTop: '20px' }}>
                            <p>Trusted by 250+ SME & Mid Corporates across various industries. Our diverse </p>
                            <p> client portfolio demonstrates our expertise in delivering tailored insurance</p>
                            <p>solutions.</p>
                        </div>
                        <div style={{ overflow: 'hidden', width: '100%', }}>
                            {/* Row 1 - Left to Right */}
                            <div className="scroll-row scroll-right">
                                {[...row1Images, ...row1Images].map((src, idx) => (
                                    <img key={`row1-${idx}`} src={src} alt={`img-${idx}`} height="70px" width="200px" style={{ marginRight: '20px' }} />
                                ))}
                            </div>

                            {/* Row 2 - Right to Left */}
                            <div className="scroll-row scroll-left" style={{ marginTop: '50px' }}>
                                {[...row2Images, ...row2Images].map((src, idx) => (
                                    <img key={`row2-${idx}`} src={src} alt={`img-${idx}`} height="70px" width="200px" style={{ marginRight: '20px' }} />
                                ))}
                            </div>
                        </div>



                    </div>
                    <div className="stats-banner1">
                        <Stat end={250} label="SME Clients & Md Clients" />
                        <div className="divider"></div>
                        <Stat end={10000} label="Lives Covered" />
                        <div className="divider"></div>
                        <Stat end={30} label="Years Experience" />
                    </div>
                </div>
            </section>

            <section className='imagegallery-container'>
                <div className='container' id='gallery'>
                    <sub style={{ width: '222px', height: '20px', fontFamily: "'DM Sans ', sans-serif", fontSize: '17px', lineHeight: '120%', letterSpacing: '15%', color: '#58585B' }}>READ TO KNOW MORE</sub>
                    <h2 style={{ marginTop: '14px', fontFamily: "'DM Sans',sans-serif", fontSize: '48px', fontWeight: '700', lineHeight: '120%', color: '#050509' }}>Blogs</h2>
                    <div className='row justify-content-center'>

                        <div className='col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center text-center mb-4 mb-lg-0'>
                            <img
                                src={blog1}
                                alt="img"
                                style={{
                                    width: '360px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                            <div className="mt-3">
                                <span><BsEyeFill /></span>
                                <span style={{ width: '229px', fontFamily: "'DM Sans',sans-serif", fontWeight: '500', fontSize: '16px', color: '#050509' }}> Understanding Insurance Coverage</span>
                            </div>
                        </div>

                        <div className='col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center text-center mb-4 mb-lg-0'>
                            <img
                                src={blog2}
                                alt="img"
                                style={{
                                    width: '360px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                            <div className="mt-3">
                                <span><BsEyeFill /></span>
                                <span style={{ width: '229px', fontFamily: "'DM Sans',sans-serif", fontWeight: '500', fontSize: '16px', color: '#050509' }}> How to File an Insurance Claim: Step-by-Step Tutorial</span>
                            </div>
                        </div>

                        <div className='col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center text-center'>
                            <img
                                src={blog3}
                                alt="img"
                                style={{
                                    width: '360px',
                                    height: '240px',
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                            <div className="mt-3">
                                <span><BsEyeFill /></span>
                                <span style={{ width: '229px', fontFamily: "'DM Sans',sans-serif", fontWeight: '500', fontSize: '16px', color: '#050509' }}> Navigating Your Insurance Policy: Key Features Explained</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section  >
                <div className='container' style={{ marginTop: '100px' }}>
                    <div className='form-container' style={{ textAlign: 'center' }}>
                        <span className='fs1'>Get</span><span className='fs2'>In</span><span className='fs3'>Touch</span>
                        <p>Ready to protect your business? Contact us for a personalized insurance solution</p>
                    </div>

                </div>
            </section>
            <section id='f-c' className="py-5">

                <div className="container">
                    <div className="row justify-content-center">

                        {/* Form Section */}
                        <div id='fi' className="col-12 col-lg mb-3 mb-lg-0" style={{ maxWidth: '483px' }}>
                            <div className="h-100 p-4 border rounded bg-white shadow-sm">
                                <h5 className="mb-4 fw-bold">Send us a message</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3" >
                                        <div className="col">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <input type="text" id="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" id="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="tel" id="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="industry" className="form-label">Industry Type</label>
                                        <input type="text" id="industry" className="form-control" value={industry} onChange={(e) => setIndustry(e.target.value)} />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea id="message" rows="4" className="form-control" style={{ height: '67px' }} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>

                                    <button
                                        className="btn w-100"
                                        style={{
                                            background: 'linear-gradient(to right, #283182, #9c3f15)',
                                            color: '#fff',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Spacer for 100px gap on desktop */}
                        <div className="d-none d-lg-block" style={{ width: '220px', }}></div>

                        {/* Contact Info Section */}
                        <div id='ci' className="col-12 col-lg" style={{ maxWidth: '481px' }}>
                            <div className="h-100 p-4 text-white rounded" style={{ backgroundColor: '#1b2f6a' }}>
                                <h5 className="mb-4 fw-bold">Contact Information</h5>

                                <div className="mb-3 d-flex align-items-start">
                                    <img src={v4} alt="Phone" style={{ background: '#EA580C', padding: '10px', borderRadius: '5px' }} />
                                    <div className="ms-3">
                                        <strong>Phone</strong>
                                        <p className="mb-0">+91 9155911770</p>
                                    </div>
                                </div>

                                <div className="mb-3 d-flex align-items-start">
                                    <img src={v1} alt="Email" style={{ background: '#EA580C', padding: '10px', borderRadius: '5px' }} />
                                    <div className="ms-3">
                                        <strong>Email</strong>
                                        <p className="mb-0">sim@innovgeninsure.com</p>
                                        <p className="mb-0">www.innovgeninsure.com</p>
                                    </div>
                                </div>

                                <div className="mb-3 d-flex align-items-start">
                                    <img src={v2} alt="Address" style={{ background: '#EA580C', padding: '10px', borderRadius: '5px' }} />
                                    <div className="ms-3">
                                        <strong>Address</strong>
                                        <p className="mb-0">
                                            F1, B Block, Madhura Apartment,<br />
                                            Lake View Garden, North Karistur,<br />
                                            Chennai - 600070
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <img src={v3} alt="Hours" style={{ background: '#EA580C', padding: '10px', borderRadius: '5px' }} />
                                    <div className="ms-3">
                                        <strong>Business Hours</strong>
                                        <p className="mb-0">Monday - Friday: 9:00 AM – 6:00 PM</p>
                                        <p className="mb-0">Saturday: 9:00 AM – 2:00 PM</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;