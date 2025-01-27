import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AboutMePage from './pages/AboutMePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#42a5f5', // Основной цвет (синий по умолчанию)
            light: '#1976d2', // Светлый оттенок
            dark: '#1565c0', // Темный оттенок
            contrastText: '#ffffff', // Цвет текста на фоне primary
        },
        secondary: {
            main: '#9c27b0', // Вторичный цвет (фиолетовый по умолчанию)
            light: '#ba68c8', // Светлый оттенок
            dark: '#7b1fa2', // Темный оттенок
            contrastText: '#ffffff', // Цвет текста на фоне secondary
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <AboutMePage></AboutMePage>
            <Footer></Footer>
        </ThemeProvider>
    );
}

export default App;
