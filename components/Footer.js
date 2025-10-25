export default function Footer() {
  return (
    <footer className='site-footer border-t mt-12'>
      <div className='wrap py-8 text-center text-sm text-slate-600'>
        <div className='mb-3'>
          <a href='#' className='text-teal-600 hover:underline'>
            Back to top
          </a>
        </div>
        <small>
          © {new Date().getFullYear()} Rooted Homely Stays — All rights
          reserved.
        </small>
      </div>

      <style jsx>{`
        .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
    </footer>
  );
}
