import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import VideoDetail from './VideoDetail';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import theme from './styles/theme'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route exact path="/" element={< Home />}/>
                    <Route path="/video/:videoId" element={< VideoDetail />}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
