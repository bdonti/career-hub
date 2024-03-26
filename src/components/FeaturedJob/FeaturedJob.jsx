import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div className="space-y-2">
      <img className="w-28 h-10" src={logo} alt="" />
      <p>{job_title}</p>
      <p>{company_name}</p>
      <div className="space-x-4">
        <button className="btn btn-ghost rounded-lg">{remote_or_onsite}</button>
        <button className="btn btn-ghost rounded-lg">{job_type}</button>
      </div>
      <div className="flex">
        <span className="mr-2 flex gap-2">
          <IoLocationOutline /> {location}
        </span>
        <span className="mr-2 flex gap-2">
          <RiMoneyDollarCircleLine /> {salary}
        </span>
      </div>
      <div className="mt-4">
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

FeaturedJob.propTypes = {
  job: PropTypes.object,
};

export default FeaturedJob;
