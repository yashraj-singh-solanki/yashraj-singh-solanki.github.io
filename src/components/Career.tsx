import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Specialist – GRC</h4>
                <h5>Network Intelligence · Pune</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Apr 2026 – Present. Leading PCI DSS v4.0.1, HITRUST CSF, and
              ISO/IEC 27001 engagements as a certified PCI QSA—CDE scoping,
              gap assessments, remediation planning, and ROC/AOC preparation
              for payments, fintech, and healthcare clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Cybersecurity Analyst</h4>
                <h5>Network Intelligence</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Apr 2025 – Mar 2026. HITRUST e1/i1/r2 assessments on the
              MyCSF platform, DORA and SWIFT CSP gap assessments, and
              regulatory audits against NPCI, SEBI CSCRF, and RBI IT
              Framework requirements for BFSI clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Analyst</h4>
                <h5>Network Intelligence · Bengaluru</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Mar 2023 – Mar 2025. Built the foundation across PCI PIN, PCI
              3DS, and ISO/IEC 27001 ISMS work—gap assessments, risk
              registers, and audit support across information security
              consulting engagements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Martian Intern</h4>
                <h5>Persistent Systems</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              May 2022 – Jun 2022. Software engineering internship under
              Persistent Systems' "Martian" program, prior to transitioning
              into cybersecurity and GRC consulting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
