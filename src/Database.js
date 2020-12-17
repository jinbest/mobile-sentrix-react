
import feature1 from './img/feature/feature1.png'
import feature2 from './img/feature/feature2.png'
import feature3 from './img/feature/feature3.png'
import feature4 from './img/feature/feature4.png'

import featureLogin from './img/feature/login.png'
import featurePlugin from './img/feature/plugin.png'
import featureViewDiag from './img/feature/view-diagnosis.png'

import adisa from './img/adisa-product.png'

const featuresDataSection2 = [
  {
    img: feature1,
    subtitle:
      'Web based application',
  },
  {
    img: feature2,
    subtitle:
      'Diagnose multiple devices in 15 seconds',
  },
  {
    img: feature3,
    subtitle:
      'Skip activation',
  },
  {
    img: feature4,
    subtitle:
      'Replacement part detection',
  },
]

const featuresDataSection3 = [
  {
    img: featureLogin,
    subtitle:
      'LOG IN',
  },
  {
    img: featurePlugin,
    subtitle:
      'PLUG IN',
  },
  {
    img: featureViewDiag,
    subtitle:
      'VIEW DIAGNOSIS',
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
  {
    href: 'feature',
    text: 'Feature',
    isActive: false,
  },
  {
    href: 'pricing',
    text: 'Pricing',
    isActive: false,
  },
  {
    href: 'certification',
    text: 'Certification',
    isActive: false,
  },
  {
    href: 'account',
    text: 'My Account',
    isActive: false,
  },
]

const footerData = {
  left: [
    {
      title: 'Help Center',
      href: 'help-center',
    },
    {
      title: 'FAQ',
      href: 'faq',
    },
    {
      title: 'Payment Methods',
      href: 'payment-methods',
    },
    {
      title: 'Terms & Conditions',
      href: 'terms-conditions',
    },
    {
      title: 'Quality Standard',
      href: 'quality-standard'
    }
  ],
  right: [
    {
      title: 'My Account',
      href: 'account',
    },
    {
      title: 'About Us',
      href: 'about',
    },
    {
      title: 'Contact Us',
      href: 'contact',
    },
    {
      title: 'Trademark Disclaimer',
      href: 'trademark',
    },
    {
      title: 'Sitemap',
      href: 'sitemap',
    }
  ]
}

const colorData = {
  red: '#C52C1D',
  grayDark: '#545252',
  gray: '#858584',
  blue: '#4F9EE7',
}

export {
  featuresDataSection2,
  featuresDataSection3,
  featuresDataSection5,
  navItemsData,
  footerData,
  colorData,
}
