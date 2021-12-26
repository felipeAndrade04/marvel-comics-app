import { PaginationProvider } from './hooks/usePagination';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <PaginationProvider>
      <GlobalStyle />
      <Home />
    </PaginationProvider>
  );
}

export default App;
