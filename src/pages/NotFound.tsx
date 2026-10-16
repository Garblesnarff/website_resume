import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const NotFound = () => (
  <PageHeader title="Off the clock" intro="This page does not exist. The address may be wrong, or the page may have moved.">
    <div className="flex flex-wrap gap-4">
      <Link to="/" className="btn btn-solid">
        Go to the home page
      </Link>
      <Link to="/projects" className="btn btn-quiet">
        See the work
      </Link>
    </div>
  </PageHeader>
);

export default NotFound;
