import { Helmet } from "react-helmet-async";

const PageHeader = ({ children, title }) => (
  <header className="page-container page-header">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </header>
);

export default PageHeader;
