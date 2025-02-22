import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectDetails.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetails = () => {
  React.useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const ImageSwiper = ({ images }) => (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      speed={600}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView="auto"
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      }}
      className="portfolio-details-slider"
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );

  const imagesGroup1 = [
    {
      src: "fitness1.png",
      alt: "Image 9",
    },
    {
      src: "fitness2.png",
      alt: "Image 10",
    },
    {
      src: "fitness3.png",
      alt: "Image 11",
    },
    {
      src: "fitness4.png",
      alt: "Image 12",
    },
  ];

  const imagesGroup2 = [
    {
      src: "coming.png",
      alt: "Image 9",
    },
    {
      src: "coming.png",
      alt: "Image 10",
    },
    {
      src: "coming.png",
      alt: "Image 11",
    },
    {
      src: "coming.png",
      alt: "Image 12",
    },
  ];

  const imagesGroup3 = [
    {
      src: "coming.png",
      alt: "Image 9",
    },
    {
      src: "coming.png",
      alt: "Image 10",
    },
    {
      src: "coming.png",
      alt: "Image 11",
    },
    {
      src: "coming.png",
      alt: "Image 12",
    },
  ];

  const projectInfo = [
    {
      name: "Fitness Blogger - PowerX",
      category: "Website Project",
      webUrl: "",
      githubUrl: "",
    },
    {
      name: "Coming Soon",
      category: "Website Project",
      webUrl: "",
      githubUrl: "",
    },
    {
      name: "Coming Soon",
      category: "Website Project",
      webUrl: "",
      githubUrl: "",
    },
  ];

  const projectDescriptions = [
    {
      title: "PowerX",
      description:
        "PowerX, a comprehensive fitness management platform leveraging the MERNstack, providing users with an intuitive interface to log and track fitness activities including exercises, diets, and yoga routines.",
    },
    {
      title: "Coming Soon",
      description:
        "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
    },
    {
      title: "Coming Soon",
      description:
        "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
    },
  ];

  return (
    <div>
      <div className="page-title dark-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              onClick={() => navigate(-1)}
              className="me-2 d-flex align-items-center"
              role="button"
            >
              <i className="bi bi-arrow-left me-1 fs-4"></i>
            </Link>
            <h1 className="mb-2 mb-lg-0">Project Details</h1>
          </div>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Project Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {projectInfo.map((project, index) => {
        let selectedImageGroup;
        if (index % 3 === 0) {
          selectedImageGroup = imagesGroup1;
        } else if (index % 3 === 1) {
          selectedImageGroup = imagesGroup2;
        } else {
          selectedImageGroup = imagesGroup3;
        }

        return (
          <section
            key={index}
            id="portfolio-details"
            className="portfolio-details section"
          >
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-8">
                  <ImageSwiper images={selectedImageGroup} />
                </div>
                <div className="col-lg-4">
                  <div
                    className="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h2>{projectDescriptions[index].title}</h2>
                    <p className="justify">
                      {projectDescriptions[index].description}
                    </p>
                  </div>
                  <div
                    className="portfolio-info"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h3>Project information</h3>
                    <ul>
                      <li>
                        <strong>Name</strong>: {project.name}
                      </li>
                      <li>
                        <strong>Category</strong>: {project.category}
                      </li>
                      <li>
                        <strong>Website URL</strong>:&nbsp;
                        <a
                          href={project.webUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      </li>
                      <li>
                        <strong>GitHub URL</strong>:&nbsp;
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectDetails;
