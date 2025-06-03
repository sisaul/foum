import homepage from './homepage';
import products from './products';
import productSubpage, { downloadableAssetsSection, faqSection, findUsInSection } from './productSubpage';
import stories from './stories';
import storySubpage from './storySubpage';
import about from './about';
import studio from './studio';
import studioSubpage from './studioSubpage';
// import contact from './contact'; // Removed, file does not exist
import privacyPolicy from './privacyPolicy';
import termsAndConditions from './termsAndConditions';
// Section/object types
import heroSection from './heroSection';
import imageSection from './imageSection';
import textSection from './textSection';
import imageCarousel from './imageCarousel';
import productGridSection from './productGridSection';
import productTextSection from './productTextSection';
import featuredProductsSection from './featuredProductsSection';
import aboutTextSection from './aboutTextSection';
import titleSection from './titleSection';
import titleTextLayoutSection from './titleTextLayoutSection';
import imageGridSection from './imageGridSection';
import singleImageCarousel from './singleImageCarousel';

const schemaTypes = [
  homepage,
  products,
  productSubpage,
  stories,
  storySubpage,
  about,
  studio,
  studioSubpage,
  // contact, // Removed
  privacyPolicy,
  termsAndConditions,
  // Section/object types
  heroSection,
  imageSection,
  textSection,
  imageCarousel,
  productGridSection,
  productTextSection,
  featuredProductsSection,
  aboutTextSection,
  titleSection,
  titleTextLayoutSection,
  imageGridSection,
  singleImageCarousel,
  downloadableAssetsSection,
  faqSection,
  findUsInSection,
];

export default schemaTypes; 