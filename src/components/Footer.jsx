export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <span className="footer-brand">RAJA NARAYANASAMY</span>
        <span>Engineering · Intelligent Products · Technology Business</span>
        <span>© <span id="year">{new Date().getFullYear()}</span> Raja Narayanasamy</span>
      </div>
    </footer>
  );
}
