export function Footer() {
  return (
    <footer className="page-footer cyan accent-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            target="_blank"
            rel="noreferrer"
            href="
              https://fortniteapi.io/"
          >
            Link to API
          </a>
        </div>
      </div>
    </footer>
  );
}
