export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-[url(/background1.svg)] bg-cover bg-center ">
        <div className="flex flex-col min-h-screen justify-center items-start p-16 gap-8">
          <h1 className="text-6xl font-bold py-4">
            React JS & Tailwind Workshop
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Learn by Building</h1>
            <p className="text-xl">
              Interactive code-along tutorials for web development, game
              <br />
              programming, and practical software projects. Follow structured
              <br />
              tutorials, write code alongside the walkthrough, and complete real
              projects — no experience required.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Whats Inside</h1>
            <p>Hands-on, step-by-step coding tutorials</p>
            <p>Starter templates and GitHub repos</p>
            <p>Project-focused learning (not just theory)</p>
            <p>Ideal for students, self-learners, and bootcampers</p>
          </div>
        </div>
      </div>
    </>
  )
}