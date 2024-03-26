import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const jobInt = parseInt(id);
  const job = jobs.find((job) => job.id === jobInt);

  const handleApplyJob = () => {
    saveJobApplication(jobInt);
    toast.success("Successfully Applied!");
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details coming here</h2>
          <h2>Job Details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
