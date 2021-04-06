import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { useForm, ValidationError } from '@formspree/react'

const HomeIndex = () => {
  const [state, handleSubmit] = useForm('meqvqebk')
  if (state.succeeded) {
    return <div className="msg">Thank you for contacting!</div>
  }
  const siteTitle = 'Md Shaker Ibna Kamal'
  const siteDescription = 'A portfolio of Md Shaker Ibna Kamal'

  const EducationSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  )

  const ProfessionSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )

  const AboutSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      />
    </svg>
  )

  const RecentWorkSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      />
    </svg>
  )

  const TechnologiesSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  )

  const ProfessionalExp = ({ company, date, position, children }) => (
    <div className="list-points">
      <strong>{date}</strong>
      <div className="circle"></div>
      <h3>{company}</h3>
      <h4>{position}</h4>
      <p>{children}</p>
    </div>
  )

  const EducationalExp = ({ name, date, degree, children }) => (
    <div className="list-points">
      <strong>{date}</strong>
      <div className="circle"></div>
      <h3>{name}</h3>
      <h4>{degree}</h4>
      <p>{children}</p>
    </div>
  )

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2 className="icon-header">
              <AboutSVG />
              ABOUT ME
            </h2>
          </header>
          <p>
            A dedicated software engineer with a highly motivated soul and an
            active team player. Worked at fast-paced startups in{' '}
            <strong>sales tech</strong>, <strong> B2B </strong>
            applications. Experienced in the development and maintenance of
            <strong> API-based systems </strong>. Skilled in building web
            applications, SPAs, and server-side applications on the{' '}
            <strong>ASP.NET Core</strong>,<strong> React</strong> and{' '}
            <strong>MSSQL </strong>
            stack. Experienced with understanding and developing business
            requirements of clients based on the problem based scenario.
            Passionate about software architecture, distributed systems,
            blockchain technologies, and design patterns. Interested in building
            significant products to solve real-world problems.
          </p>
        </section>

        <section id="two">
          <header className="major">
            <h2 className="icon-header">
              <ProfessionSVG />
              PROFESSIONAL EXPERIENCE
            </h2>
          </header>
          <ProfessionalExp
            company="W4 Solutions"
            date="FEB 2019 - PRESENT"
            position="Software Engineer"
          >
            <ul>
              <li>
                Developed RESTful APIs using ASP.NET Core Framework, developed
                dynamic pricing engine
              </li>
              <li>
                Designed business-driven data model, used MSSQL as SQL database
              </li>
              <li>
                Containerized the application with docker for CI/CD pipeline
              </li>
            </ul>
          </ProfessionalExp>
          <ProfessionalExp
            company="Celltron Electro Manufacturing Service"
            date="NOV 2017 - DEC 2017"
            position="Intern"
          >
            <ul>
              <li>
                Learned Web Scraping using JavaScript and the basics of frontend
                development
              </li>
            </ul>
          </ProfessionalExp>
        </section>

        <section id="three">
          <header className="major">
            <h2 className="icon-header">
              <EducationSVG />
              EDUCATIONAL BACKGROUND
            </h2>
          </header>
          <EducationalExp
            name="Islamic University of Technology"
            degree="Bachelor of Science in Computer Science and Engineering"
            date="JAN 2015 - NOV 2018"
          ></EducationalExp>
          <EducationalExp
            name="Rangpur Cadet College"
            degree="Higher Secondary School Certificate"
            date="JUN 2012 - AUG 2014"
          ></EducationalExp>
        </section>

        <section id="four">
          <header className="major">
            <h2 className="icon-header">
              <TechnologiesSVG />
              Technologies
            </h2>
          </header>
          <ul className="tech-list" style={{ columns: 2 }}>
            <li>C#</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>ASP.NET Core</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </section>

        <section id="five">
          <header className="major">
            <h2 className="icon-header">
              <RecentWorkSVG />
              RECENT WORK
            </h2>
          </header>

          <div className="wrapper">
            <div className="column">
              <h4>E-Shop</h4>
              <h5>React, Node, Mongo</h5>
              <ul>
                <li>An E-Commerce WebSite</li>
                <li>
                  Simple implemention of Customer, Product relationship and
                  management
                </li>
                <li>Integrated payment gateway using PayPal API</li>
                <li>Hosted the database using MongoAtlas</li>
              </ul>
              <a
                href="https://github.com/Shaker1664/e-shop"
                target="_blank"
                style={{ textDecoration: 'underline' }}
              >
                https://github.com/Shaker1664/e-shop
              </a>
            </div>
            <div className="column">
              <h4>BasicProject</h4>
              <h5>ASP.NET Core MVC, MSSQL, Docker</h5>
              <ul>
                <li>An Employee Management System</li>
                <li>
                  Features like, Salary Management, Tax Management are
                  integrated
                </li>
                <li>Employee creation, deletion management</li>
              </ul>
              <a
                href="https://github.com/Shaker1664/BasicProject"
                target="_blank"
                style={{ textDecoration: 'underline' }}
              >
                https://github.com/Shaker1664/BasicProject
              </a>
            </div>
          </div>
        </section>

        <section id="six">
          <h2>Get In Touch</h2>
          <p>
            Need anything built, want to work together or simply want to have a
            chat?
            <br />
            Drop me an e-mail at <strong>shakerkamal@iut-dhaka.edu</strong> or
            simply fill out the form below and I will reply to you soon!
          </p>
          <div className="row">
            <div className="12u 12u$(small)">
              <form method="post" action="#" onSubmit={handleSubmit}>
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      disabled={state.submitting}
                    />
                  </li>
                </ul>
              </form>
            </div>
            {/* <div className="12u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd. Nashville, TN 00000, United States
                </li>
                <li>
                  <h3 className="icon fa-phone-square">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div> */}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
