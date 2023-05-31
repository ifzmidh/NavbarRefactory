import LoremIpsum from "react-lorem-ipsum"

function App() {
  return (
    <div className="App">
      <div>
        <header className="sticky inset-0 z-10 block bg-neutral bg-opacity-80 px-16 py-4 shadow-lg">
          <section className="flex justify-between items-center">
            <div className='flex items-center'>
              <a href="/" className="mr-4 text-xl font-bold font-sans text-ghost">CodeWork</a>
              <a href="/"><btn className="mx-3 btn btn-sm btn-ghost">About</btn></a>
              <a href="/"><btn className="mx-3 btn btn-sm btn-ghost">Forum</btn></a>
              <a href="/"><btn className="mx-3 btn btn-sm btn-ghost">Code</btn></a>
            </div>
            <div>
              <a href="/"><btn className="mx-3 btn btn-sm btn-outline btn-primary">Login</btn></a>
              <a href="/"><btn className="mx-3 btn btn-sm btn-outline btn-secondary">Register</btn></a>
            </div> 
          </section>
        </header>
        <main className="mx-auto max-w-screen-md">

          <div className="mt-8">
            <p className="block font-sans text-md leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
              May 31, 2023 - Hanif Azmi Hafidh
            </p>
            <h1 className="block font-sans text-5xl font-black leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
              Course Fullstack
            </h1>
            <h2 className="mb-3 block font-sans text-4xl font-black leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
              Belajar Tailwind
            </h2>
            <hr class="border-slate-300 dark:border-slate-700 mb-4"></hr>
            <btn className="mr-2 btn btn-xs btn-active btn-ghost">#WEBDEV</btn>
            <btn className="mr-2 btn btn-xs btn-active btn-ghost">#FULLSTACK</btn>
            <btn className="mr-2 btn btn-xs btn-active btn-ghost">#FE</btn>
            <btn className="btn btn-xs btn-active btn-ghost">#TAILWIND</btn>
          </div>
          <div className="my-12 drop-shadow-md">
            <img src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80" className="w-full object-cover object-center overflow-hidden rounded-xl shadow-lg" alt="" />
          </div>
          <div className="mb-12">
            <h4 className="mb-3 block font-sans text-xl font-black leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
              Apa Itu Tailwind?
            </h4>
            <LoremIpsum p={5} />  
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
