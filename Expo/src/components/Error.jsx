import React from 'react'

function Error() {
  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8  bg-cover bg-no-repeat   bg-[url('https://www.rcrc.gov.sa/wp-content/uploads/2023/06/Expo-Site-Night-Time.jpg')]">
    <div className="text-center bg-black/60 rounded-md p-3">
      <p className="text-base text-6xl font-semibold text-white  hover:text-green-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl hover:text-green-600">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-white hover:text-green-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-bold text-black shadow-sm hover:bg-green-600 hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  duration-300 "
        >
          Go back home
        </a>
      </div>
    </div>
  </main>
  )
}

export default Error