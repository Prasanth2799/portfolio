import { MdArrowOutward } from "react-icons/md"

 const Projects = () => {
  const projectConfig = [
    {
      id : 1,
      name : "Dev Connect",
      photo : "/Dev Connect.png",
      description : "A platform for developers to connect",
      live_link : "",
      github_url : ""
    },
    {
      id : 2,
      name : "Netflix GPT",
      photo : "/Netflix GPT.png",
      description : "AI-Powered Movie Recommendation App.",
      live_link : "",
      github_url : ""
    }
  ]
  return (
    
    <div className="flex flex-wrap gap-4 min-h-screen justify-center">
    {projectConfig.map((project) => (
      <div key={project?.id}>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      className="h-36 w-full"
      src= {project?.photo}
      alt={project?.name+" photo"} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{project?.name}</h2>
    <p>{project?.description}</p>
    <div className="card-actions">
      <button className="btn bg-transparent border border-blue-500">
      <MdArrowOutward />  
      LIVE
      </button>
      <button className="btn btn-primary">Github</button>

    </div>
  </div>
</div>
      </div>
    ))}
    </div>
  )
}

export default Projects