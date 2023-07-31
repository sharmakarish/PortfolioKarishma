import { Col ,Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ height: "230px", "@media (max-width: 767px)": { height: "600px" } }}>
        <img src={imgUrl} alt={title} style={{ height: "100%", objectFit: "fill" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div>{description}</div>
          <Button href={link} target="_blank" variant="primary">
            View Project
          </Button>
        </div>
      </div>
    </Col>
  )
}