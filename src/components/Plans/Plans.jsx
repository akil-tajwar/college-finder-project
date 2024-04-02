import React, { useEffect } from 'react';
import css from "./plans.module.css"
import { LuArrowRight } from "react-icons/lu";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const Plans = () => {
    return (
        <div className={css.container}>
            <div className={css.header}>
                <div>
                    <h3><span>Compare Programs</span> <LuArrowRight /></h3>
                </div>
                <div>
                    <small>basic</small>
                    <p>Know yourself</p>
                    <h2>₹ 4,999</h2>
                    <button>Enroll Now</button>
                </div>
                <div>
                    <small style={{ border: '1px solid green' }}>for Stream Selection</small>
                    <p>Career Path Pro</p>
                    <h2>₹ 6,999</h2>
                    <button>Enroll Now</button>
                </div>
                <div>
                    <small>for Long-Term Guidance</small>
                    <p>Admission Path Pro</p>
                    <h2>₹22,000</h2>
                    <button>Enroll Now</button>
                </div>
            </div>
            <div className={css.content}>
                <div>
                    <span>Career Exploration</span>
                    <p>Access well-researched content on 550+ careers</p>
                </div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div>
                    <span>16 page career report</span>
                    <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                </div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div>
                    <span>Career Counseling</span>
                    <p>One-on-One Counseling session to help in understand yourself and achieve the outcome as per the opted program.</p>
                </div>
                <div className={css.check}>1 session</div>
                <div className={css.check}>2 session</div>
                <div className={css.check}>5 session</div>
                <div>
                    <span>Live Career Class</span>
                    <p>Weekly live group class by top Industry professionals & college alumni</p>
                </div>
                <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div>
                    <span>Chat with an expert</span>
                    <p>Support via chat for 1 year</p>
                </div>
                <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                <div className={css.check}>1 year</div>
                <div className={css.check}>1 year</div>
                <div>
                    <span>Application form filling assistance</span>
                    <p>A maximum of 7 applicationform filling with full assistancefrom a dedicated counselor</p>
                </div>
                <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                <div className={css.outcome_title}>
                    <span className={css.title_check}><FaCheckCircle /></span>
                    <span>Outcome</span>
                </div>
                <div className={css.outcome}>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                    </div>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Recommendation of suitable Career Paths.</p>
                    </div>
                </div>
                <div className={css.outcome}>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                    </div>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Recommendation of suitable Career Paths.</p>
                    </div>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Absolute clarity on your course, colleges, and backup colleges.</p>
                    </div>
                </div>
                <div className={css.outcome}>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                    </div>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Entire college application process including help in application form filling.</p>
                    </div>
                    <div>
                        <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                        <p>Our commitment to be there with you until you get an admission offer letter from an Indian college</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Plans;