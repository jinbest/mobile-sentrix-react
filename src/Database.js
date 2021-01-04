
/* Homepage: Section1 Animation Data */
import mobile1 from './img/mobile/1.png'
import mobile2 from './img/mobile/2.png'
import mobile3 from './img/mobile/3.png'
import mobile4 from './img/mobile/4.png'
import mobile5 from './img/mobile/5-1.png'
import mobile6 from './img/mobile/6.png'
import mobile7 from './img/mobile/7.png'

/* HomeSec1 Animation Data */
import mobileSec1 from './img/section1/mobileSec1.png'
import layer1 from './img/section1/layer-1.png'
import layer2 from './img/section1/layer-2.png'
import layer3 from './img/section1/layer-3.png'
import layer4 from './img/section1/layer-4.png'
import lineScanner from './img/section1/line-scanner.png'
import lineScannerNew from './img/section1/line-scanner-1.png'

import logoHeader from './img/logo/logo-header.png'
import logoFooter from './img/logo/logo-footer.png'

/* Homepage: Phone-Plugin Animation Data */
import phone1 from './img/section2/multiple-diagnosis/phone1.png'
import plugin from './img/section2/multiple-diagnosis/plug.png'
import phonePluged from './img/section2/multiple-diagnosis/phone-pluged.png'
import group1 from './img/section2/multiple-diagnosis/group1.png'
import group2 from './img/section2/multiple-diagnosis/group2.png'

/* Homepage: Skip-activation Animation Data */
import skipPhone from './img/section2/skip-activation/skip-phone.png'
import lineCurve from './img/section2/skip-activation/line-curve.png'
import panYRoundB from './img/section2/skip-activation/pan-y-round-b.png'
import panOrange from './img/section2/skip-activation/pan-orange.png'
import panBlue from './img/section2/skip-activation/pan-blue.png'
import panGElipY from './img/section2/skip-activation/pan-g-elip-y.png'
import panYellow from './img/section2/skip-activation/pan-yellow.png'
import panRRoundG from './img/section2/skip-activation/pan-r-round-g.png'
import panDrRoundY from './img/section2/skip-activation/pan-dr-round-y.png'
import panGray from './img/section2/skip-activation/pan-gray.png'
import lineDots from './img/section2/skip-activation/line-dots.png'

/* Homepage: Part-detection Animation Data */
import blueLine from './img/section2/part-detection/blue-line.png'
import phoneDetection from './img/section2/part-detection/phone-detection.png'

/* Homepage: Section3 images */
import blankPhoneSec3 from './img/section3/blank-phone-new.png'
import check from './img/section3/check.png'
import Intersect1 from './img/section3/Intersect1.png'
import Intersect2 from './img/section3/Intersect2.png'
import Intersect3 from './img/section3/Intersect3.png'
import loginSec3 from './img/section3/login.png'
import pluginSec3 from './img/section3/plugin.png'
import unchecked from './img/section3/unchecked.png'
import dot from './img/section3/dot.png'

import adisa from './img/adisa-product.png'

const featuresDataSection2 = [
  { 
    title: 'Web Based', 
    subtitle: 'No Download Required', 
    content: 'Diagnose your devices straight from your browser! No installation or downloads required.',
    color: {
      default: '#858584',
      selected: '#C52C1D',
    }
  },
  { 
    title: 'Multiple Diagnosis',
    subtitle: 'Diagnose Multiple Devices', 
    content:  'Connect your devices and run diagnostics on all connected devices at once!',
    color: {
      default: '#858584',
      selected: '#C52C1D',
    }
  },
  { 
    title: 'Skip Activation',
    subtitle: 'Skip Activation',
    content: 'Skip activation of any device!',
    color: {
      default: '#858584',
      selected: '#C52C1D',
    }
  },
  { 
    title: 'Part Detection',
    subtitle: 'Part Detection',
    content: 'Non-OEM replacement components are the fastest growing problem in the secondary market. Protect your inventory with the most trusted certification in the industry.',
    color: {
      default: '#858584',
      selected: '#C52C1D',
    }
  },
]

const featuresDataSection5 = [
  {
    title: 'Account Dashboard',
    subtitle: 'The results of every device you scan are stored in you raccount, which you can access through our dashboard',
    img: ''
  },
  {
    title: 'Data Erasure',
    subtitle: 'MobileSentrix has undergone product claim tests by ADISA. ADISA sets the standard for data disposal services.',
    img: adisa
  }
]

const navItemsData = [
  { href: 'feature', text: 'Features', isActive: false },
  { href: 'pricing', text: 'Pricing', isActive: false },
  { href: 'certification', text: 'Certification', isActive: false },
  { href: 'account', text: 'My Account', isActive: false },
]

const redirectRouters = [
  'feature',
  'pricing',
  'certification',
  'account',
  'help-center',
  'faq',
  'payment-methods',
  'terms-conditions',
  'quality-standard',
  'about',
  'contact',
  'trademark',
  'sitemap',
]

const footerData = {
  left: [
    { title: 'Help Center', href: 'help-center' },
    { title: 'FAQ', href: 'faq' },
    { title: 'Payment Methods', href: 'payment-methods' },
    { title: 'Terms & Conditions', href: 'terms-conditions' },
    { title: 'Quality Standard', href: 'quality-standard' }
  ],
  right: [
    { title: 'My Account', href: 'account' },
    { title: 'About Us', href: 'about' },
    { title: 'Contact Us', href: 'contact' },
    { title: 'Trademark Disclaimer', href: 'trademark' },
    { title: 'Sitemap', href: 'sitemap' }
  ]
}

const colorData = {
  red: '#C52C1D',
  grayDark: '#545252',
  gray: '#858584',
  blue: '#4F9EE7',
}

const mobileScanningAnimationData = [
  { img: mobile7, alt: 'mobile7', cls: 'move-down' },
  { img: mobile6, alt: 'mobile6', cls: 'fading-in' },
  { img: mobile4, alt: 'mobile4', cls: 'fading-in' },
  { img: mobile3, alt: 'mobile3', cls: 'move-up fading-out' },
  { img: mobile2, alt: 'mobile2', cls: 'move-up fading-out' },
  { img: mobile1, alt: 'mobile1', cls: 'move-up' },
  { img: mobile5, alt: 'mobile5', cls: 'scanner' },
]

const phonePluginAnimations = {
  phone: phone1,
  plugin: plugin,
  phonePlugin: phonePluged,
  group1: group1,
  group2: group2
}

const logoData = {
  header: { img: logoHeader, cls: 'img-header' },
  footer: { img: logoFooter, cls: 'img-footer' },
}

const skipActiveAnimation = {
  skipPhone: skipPhone,
  lineCurve: lineCurve,
  lineDots: lineDots,
  unlockedSnaps1: [
    panYRoundB, panOrange, panBlue, panGElipY, panYellow, panRRoundG, panBlue, panDrRoundY, panGray
  ],
  unlockedSnaps2: [
    panOrange, panYRoundB, panBlue
  ]
}

const partDetectAnimation = {
  blankPhone: skipPhone,
  blueLine: blueLine,
  phoneDetection: phoneDetection
}

const homeSec3Images = {
  blankPhoneSec3: blankPhoneSec3,
  check: check,
  Intersect1: Intersect1,
  Intersect2: Intersect2,
  Intersect3: Intersect3,
  loginSec3: loginSec3,
  pluginSec3: pluginSec3,
  unchecked: unchecked,
  dot: dot
}

const homeSec1Images = {
  mobileSec1: mobileSec1,
  layer1: layer1,
  layer2: layer2,
  layer3: layer3,
  layer4: layer4,
  lineScanner: lineScanner,
  lineScannerNew: lineScannerNew
}

export {
  mobileScanningAnimationData,
  phonePluginAnimations,
  skipActiveAnimation,
  partDetectAnimation,
  homeSec3Images,
  featuresDataSection2,
  featuresDataSection5,
  navItemsData,
  footerData,
  colorData,
  logoData,
  redirectRouters,
  homeSec1Images
}
