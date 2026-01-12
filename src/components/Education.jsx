const Education = () => {
  return (
    <div className="min-h-screen my-2">
        <h1 className="text-center text-xl font-bold mb-10">Education</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
             <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">2017-2020</time>
      <div className="text-lg font-black">B.Sc (MPC)</div>
      Completed graduation in MPC and later transitioned into computer science and full-stack web development.
    </div>
    <hr />
  </li>
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2022</time>
      <div className="text-lg font-black">Nxtwave CCBP 4.0 Intensive program</div>
      Completed MERN Stack development through NxtWave CCBP 4.0 Intensive Program, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
    </div>
    <hr />
  </li>
</ul>
    </div>
  )
}

export default Education;