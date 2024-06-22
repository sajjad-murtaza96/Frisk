import { featureData4 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    featureData4.filter((elm) => elm.id == serviceId)[0] || featureData4[1];
  const { serviceDetails } = serviceItem;
  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/assets/img/service/service-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{serviceItem.title}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: serviceDetails?.description ?? "" }}
              ></div>
            </div>
            <h3>Remarking Services</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: serviceDetails?.remarkingServices ?? "",
              }}
            ></div>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_2-2.png)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <h3>Services Offered</h3>
            <ul className="sec-text mb-40">
              {serviceDetails?.servicesOffered?.map((item) => (
                <li className="sec-text mb-20">
                  <strong>{`${item.title} :`}</strong> {item.text}
                </li>
              )) ?? ""}
            </ul>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/feature-icon1-1.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project-2">
                      Custom Solutions
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Tailored strategies and creative solutions crafted to drive
                    success and foster strong client relationships worldwide.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/img/icon/feature-icon1-2.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project-2">
                      Timely Execution
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    Efficient project management ensuring prompt delivery and
                    exceptional results.
                  </p>
                </div>
              </div>
            </div>
            <p className="sec-text mb-n1 mt-40">
              At XperLabs, we combine innovation with a commitment to
              sustainability, empowering global brands like yours to lead in
              their industries and deliver enduring value to stakeholders
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
