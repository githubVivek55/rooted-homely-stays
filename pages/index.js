import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rooted Homely Stays — Rental Homes</title>
        <meta
          name='description'
          content='Comfortable rental homes — short and long term stays.'
        />
      </Head>

      <Header />

      <main
        className='container'
        style={{ paddingTop: 'var(--header-height, 72px)' }}
      >
        <section className='hero bg-white shadow-md rounded-lg p-8'>
          <h1 className='text-3xl font-bold text-slate-800'>
            Welcome to Rooted Homely Stays
          </h1>
          <p className='mt-3 text-slate-600'>
            We provide comfortable, well-maintained rental homes for travelers
            and families. Short-term or long-term stays — cleaned, furnished and
            ready.
          </p>
        </section>

        <section className='services mt-8'>
          <h2 className='text-2xl font-semibold text-slate-800'>
            Why Guests Choose Us
          </h2>

          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='p-4 bg-white rounded-lg shadow-sm flex items-start gap-3'>
              <div className='flex-none w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10l1.5 1.5L12 4l7.5 7.5L21 10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-md font-medium text-slate-800'>
                  Furnished homes
                </h3>
                <p className='text-sm text-slate-600'>
                  Comfortable, fully furnished stays ready on arrival.
                </p>
              </div>
            </div>

            <div className='p-4 bg-white rounded-lg shadow-sm flex items-start gap-3'>
              <div className='flex-none w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V11H3v8a2 2 0 0 0 2 2z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-md font-medium text-slate-800'>
                  Flexible booking
                </h3>
                <p className='text-sm text-slate-600'>
                  Nightly, weekly or monthly — pick what suits you.
                </p>
              </div>
            </div>

            <div className='p-4 bg-white rounded-lg shadow-sm flex items-start gap-3'>
              <div className='flex-none w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 17v-6a2 2 0 1 1 4 0v6m-7 4h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-md font-medium text-slate-800'>
                  Cleaning & maintenance
                </h3>
                <p className='text-sm text-slate-600'>
                  Regular professional cleaning and prompt maintenance.
                </p>
              </div>
            </div>

            <div className='p-4 bg-white rounded-lg shadow-sm flex items-start gap-3'>
              <div className='flex-none w-10 h-10 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 10h.01M12 10h.01M16 10h.01M9 16h6'
                  />
                </svg>
              </div>
              <div>
                <h3 className='text-md font-medium text-slate-800'>
                  Local support
                </h3>
                <p className='text-sm text-slate-600'>
                  A local team available to help guests during their stay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='featured mt-10'>
          <h2 className='text-2xl font-semibold text-slate-800 mb-4'>
            Featured properties
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
              <div className='h-40 bg-slate-100 flex items-center justify-center'>
                <span className='text-slate-400'>Image placeholder</span>
              </div>
              <div className='p-4'>
                <h3 className='font-medium text-slate-800'>Cozy Cottage</h3>
                <p className='text-sm text-slate-600'>
                  2 beds · 1 bath · Near downtown
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <span className='text-teal-600 font-semibold'>
                    $95 / night
                  </span>
                  <a
                    href='#'
                    className='text-sm text-slate-700 hover:underline'
                  >
                    View
                  </a>
                </div>
              </div>
            </article>

            <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
              <div className='h-40 bg-slate-100 flex items-center justify-center'>
                <span className='text-slate-400'>Image placeholder</span>
              </div>
              <div className='p-4'>
                <h3 className='font-medium text-slate-800'>Sunny Apartment</h3>
                <p className='text-sm text-slate-600'>
                  1 bed · 1 bath · Quiet neighborhood
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <span className='text-teal-600 font-semibold'>
                    $75 / night
                  </span>
                  <a
                    href='#'
                    className='text-sm text-slate-700 hover:underline'
                  >
                    View
                  </a>
                </div>
              </div>
            </article>

            <article className='bg-white rounded-lg shadow-sm overflow-hidden'>
              <div className='h-40 bg-slate-100 flex items-center justify-center'>
                <span className='text-slate-400'>Image placeholder</span>
              </div>
              <div className='p-4'>
                <h3 className='font-medium text-slate-800'>Family Home</h3>
                <p className='text-sm text-slate-600'>
                  3 beds · 2 baths · Great for families
                </p>
                <div className='mt-3 flex items-center justify-between'>
                  <span className='text-teal-600 font-semibold'>
                    $140 / night
                  </span>
                  <a
                    href='#'
                    className='text-sm text-slate-700 hover:underline'
                  >
                    View
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className='contact mt-8'>
          <div className='bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8'>
            <h2 className='text-2xl font-semibold text-slate-800'>Contact</h2>
            <p className='mt-2 text-slate-700 max-w-xl'>
              To inquire or book a stay, get in touch and we'll respond within
              24 hours. Prefer phone? Call us — otherwise send a quick message
              below.
            </p>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <div>
                  <h3 className='text-sm font-medium text-slate-700'>Phone</h3>
                  <p className='text-slate-800'>(123) 456-7890</p>
                </div>

                <div>
                  <h3 className='text-sm font-medium text-slate-700'>Email</h3>
                  <p>
                    <a
                      href='mailto:owner@example.com'
                      className='text-teal-600 hover:underline'
                    >
                      owner@example.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className='text-sm font-medium text-slate-700'>
                    Address
                  </h3>
                  <p className='text-slate-700'>123 Cozy Lane, Hometown</p>
                </div>
              </div>

              <div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className='space-y-3'
                >
                  <div>
                    <label className='block text-sm text-slate-700'>
                      Your name
                    </label>
                    <input
                      className='mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                      placeholder='Jane Doe'
                    />
                  </div>

                  <div>
                    <label className='block text-sm text-slate-700'>
                      Email
                    </label>
                    <input
                      className='mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                      placeholder='you@example.com'
                    />
                  </div>

                  <div>
                    <label className='block text-sm text-slate-700'>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className='mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                      placeholder='I am interested in booking...'
                    />
                  </div>

                  <div className='text-right'>
                    <button className='inline-flex items-center gap-2 rounded-md bg-teal-600 text-white px-4 py-2 text-sm hover:bg-teal-700 transition'>
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .hero {
          background: #f9f9f9;
          padding: 1.5rem;
          border-radius: 8px;
        }
        .hero h1 {
          margin: 0 0 0.5rem 0;
        }
        .services ul {
          padding-left: 1.2rem;
        }
        .contact {
          margin-top: 1.2rem;
        }
      `}</style>
    </>
  );
}
