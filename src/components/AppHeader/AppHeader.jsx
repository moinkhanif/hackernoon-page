import PrimaryNavBar from '../PrimaryNavBar/PrimaryNavBar';
import PrimarySubNavBar from '../PrimarySubNavBar/PrimarySubNavBar';
import SponsorNavBar from '../SponsorNavBar/SponsorNavBar';

const AppHeader = () => (
  <header className="App-header">
    <PrimaryNavBar />
    <PrimarySubNavBar />
    <SponsorNavBar />
  </header>
);

export default AppHeader;
