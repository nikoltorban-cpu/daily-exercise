import ThemeProvider
from './ThemeContext';

import ThemeSwitcher
from './ThemeSwitcher';

import Content
from './Content';

function App() {

  return (

    <ThemeProvider>

      <ThemeSwitcher />

      <Content />

    </ThemeProvider>

  );
}

export default App;