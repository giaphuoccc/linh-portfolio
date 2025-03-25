import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cyhome from "../Details/Cyhome/CyhomeProject.jsx";
import Pharmacity from "../Details/Pharmacity/PharmaProject";
import ECOMerchant from "../Details/ECO/ECOProject";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mỗi khi `id` đổi (tức là sang project khác), cuộn lên đầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  return <div>{projectDetail}</div>;
};

export default ProjectDetail;
