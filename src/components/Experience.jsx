const Experience = () => {
  return (
    <div className="min-h-screen my-2">
      <h1 className="text-center text-xl font-extrabold mb-10">
        Professional Experience
      </h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="timeline-end md:mb-12">
            <time className="font-mono italic text-sm">2024</time>
            <div className="text-2xl font-black mt-1">Infosys</div>
            <div className="text-lg font-semibold">Systems Associate</div>

            <p className="mt-3 text-sm text-gray-500 max-w-md">
              Worked on automation and testing-related activities, gaining exposure to
              enterprise applications, structured workflows, and quality assurance processes.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="timeline-start mb-12 md:text-end">
            <time className="font-mono italic text-sm">May 2022 – Present</time>
            <div className="text-2xl font-black mt-1">Infosys</div>
            <div className="text-lg font-semibold">Operations Executive</div>

            <p className="mt-3 text-sm text-gray-500 max-w-md">
              Supported enterprise operations, followed standard operating procedures,
              and collaborated with cross-functional teams to ensure process efficiency
              and quality delivery.
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  )
}

export default Experience
