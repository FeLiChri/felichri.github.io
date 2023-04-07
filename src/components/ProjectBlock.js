import './ProjectBlock.css';

function ProjectBlock(props) {
    return (
      <div className="ProjectBlock">
        <div className="child">
            <h3 className="Name">{props.projName}</h3>
            <p className="short-description">{props.description}</p>
            <p className="materials">{props.materials.join(", ")}</p>
            <p className="date">{props.date}</p>
        </div>
      </div>
    );
  }
  
  export default ProjectBlock;