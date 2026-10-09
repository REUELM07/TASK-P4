import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-container">

        <Link to="/" className="site-logo">
          DEV<span>@</span>Deakin
        </Link>

        <div className="search-area">
          <Input
            fluid
            placeholder="Search articles, tutorials..."
          />
        </div>

        <div className="header-actions">
          <Button basic>Post</Button>

          <Link to="/login">
            <Button basic>Login</Button>
          </Link>
        </div>

      </div>
    </header>
  );
}

export default SiteHeader;