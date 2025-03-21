import { useParams } from 'react-router-dom';
import Cyhome from "../Details/Cyhome/CyhomeProject.jsx";
import Pharmacity from "../Details/Pharmacity/PharmaProject";
import ECOMerchant from "../Details/ECO/ECOProject";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project id from the URL

  let projectDetail;
  if (id === 'cyhome') {
    projectDetail = <Cyhome />;
  } else if (id === 'pharmacity') {
    projectDetail = <Pharmacity />;
  } else if (id === 'ecomerchant') {
    projectDetail = <ECOMerchant />;
  } else {
    projectDetail = <div>Project not found!</div>;
  }

  return (
    <div>
      {projectDetail}
    </div>
  );
};

export default ProjectDetail;
