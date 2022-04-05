import './App.css';
import Heading from './Heading'
import HeadingContent from './Content/HeadingContent';
import BodyContent from './Content/Body'
import FooterContent from './Content/FooterContent'
import Footer from './Footer'

function App() {
  return (
    <div styles={{overflow: 'hidden'}}>
      <Heading />
      <HeadingContent />
      <BodyContent />
      <FooterContent />
      <Footer />
    </div>
  );
}

export default App;
