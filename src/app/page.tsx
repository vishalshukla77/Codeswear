// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="codeswear.com - wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{ flexGrow: 1 }}>
        <img 
          src="/w1.jpg" 
          alt="Image description" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Wear the Code with CodesWear.com
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Wear whatever you want? What do you want? You want code? So why not wear the code.
            </p>
          </div>
          
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    className="w-6 h-6" 
                    viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
