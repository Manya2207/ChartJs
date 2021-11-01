import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';
import MediaQuery from 'react-responsive'


function App() {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        <DesktopLayout />
      </MediaQuery>

      <MediaQuery maxDeviceWidth={1224}>
        <MobileLayout />
      </MediaQuery>

    </div>
  );
}

export default App;
