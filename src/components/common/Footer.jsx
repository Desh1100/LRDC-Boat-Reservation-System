import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
        style={{ marginTop: "7rem" }}
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className="bg-primary rounded p-4">
                <Link to="/">
                  <h1 className="text-white text-uppercase mb-3">
                    LRDC Boat Service
                  </h1>
                </Link>
                <p className="text-white mb-0">
                  LRDC Boat Service offers a 20-minute canal commute in Colombo,
                  with stops at key locations and maintained by retired Navy
                  personnel.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 5).map((val, index) => (
                  <a
                    key={index}
                    href={val.url}
                    className="btn btn-outline-light btn-social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <a className="btn btn-link" href="" key={itemIndex}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="container py-4" style={{ borderTop: "1px solid #444" }}>
          <div className="row justify-content-center">
            <div className="col-12 text-center text-light">
              <p className="mb-0">
                © All Rights Reserved | LRDC Services (Pvt) Limited |{" "}
                <a
                  href="https://web.facebook.com/permalink.php/?story_fbid=122122260446227229&id=61556816875145&_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Developed by DeshCode IT Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
