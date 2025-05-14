import { useTheme } from '../providers/ThemeProvider.tsx';
import Header from '../../widgets/header/ui/Header/Header.tsx';
import { MainPage } from '../../pages/main';


function BaseLayouts() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : 'ull'}`}>123
  <Header />
  <div className="container">
    <MainPage/>
    </div>
    </div>
);
}

export default BaseLayouts;