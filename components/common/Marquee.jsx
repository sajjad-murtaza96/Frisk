"use client";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  const marQueeItems = [
    {
      id: 1,
      href: "#",
      text: "Delivering agile solutions for digital transformation",
      icon: "fas fa-star-of-life",
    },
    {
      id: 2,
      href: "#",
      text: "Coding with unparalleled adaptability",
      icon: "fas fa-star-of-life",
    },
    {
      id: 3,
      href: "#",
      text: "Transforming visions into reality with creative expertise",
      icon: "fas fa-star-of-life",
    },
    {
      id: 4,
      href: "#",
      text: "Crafting brand legacies with strategic expertise",
      icon: "fas fa-star-of-life",
    },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
