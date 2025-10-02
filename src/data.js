// Is file mein hum site ka saara navigation data rakhenge.
import { FaLightbulb, FaFire, FaChartBar, FaThumbsUp, FaFilm, FaPlayCircle, FaList, FaRandom, FaClock, FaTrophy } from 'react-icons/fa';


// YEH SABSE BADA CHANGE HAI
const pornVideosMenuData = {
  type: 'mega-menu',
  columns: [
    {
      title: 'Discover Videos',
      type: 'iconLinks',
      items: [
        { text: 'Recommended', icon: FaLightbulb },
        { text: 'Hottest', icon: FaFire },
        { text: 'Most Viewed', icon: FaChartBar },
        { text: 'Top Rated', icon: FaThumbsUp },
        { text: 'Popular Homemade', icon: FaFilm },
        { text: 'Shorties', icon: FaPlayCircle },
        { text: 'Playlists', icon: FaList },
        { text: 'Random', icon: FaRandom },
        { text: 'Newest', icon: FaClock },
        { text: 'Viewers\' Choice', icon: FaTrophy },
      ]
    },
    {
      title: 'Hottest',
      type: 'videoThumbnails',
      items: [
        { id: 1, title: 'Teaching Little Step Sis How to Goon', creator: 'Family Therapy', img: `https://picsum.photos/200/112?random=11` },
        { id: 2, title: 'Anxiety Relief With Thick Latina Step Sis', creator: 'Scott Stark', img: `https://picsum.photos/200/112?random=12` },
      ]
    },
    {
      title: 'Recommended',
      type: 'videoThumbnails',
      items: [
        { id: 3, title: 'Ariana fucking herself hard with her favorite...', creator: 'Ariana Demure', img: `https://picsum.photos/200/112?random=13` },
        { id: 4, title: 'Cozy Night In: Unwinding With My...', creator: 'Stacy Ma', img: `https://picsum.photos/200/112?random=14` },
      ]
    },
    {
      title: 'Channels',
      type: 'channelThumbnails',
      items: [
        { id: 1, name: 'Cam Soda', rank: 46, logo: 'https://via.placeholder.com/100x50/ff007f/000000?text=CamSoda' },
        { id: 2, name: 'GirlsWay', rank: 33, logo: 'https://via.placeholder.com/100x50/00bcd4/000000?text=GirlsWay' },
      ]
    },
    {
      title: 'Trending Searches',
      type: 'tags',
      items: [
        'Fucking My Best Friend', 'Milf Hot', '69 Position', 'Public Flashing', 'Stepmom Helps Stepson', 'Xxx Video',
      ]
    },
  ]
};

export const navData = [
  { title: 'HOME', dropdown: false },
  { title: 'PORN VIDEOS', dropdown: true, content: pornVideosMenuData },
  { title: 'CATEGORIES', dropdown: true, content: { type: 'grid', links: ['MILF', 'Japanese', 'Indian', 'Lesbian', 'Threesome', 'Transgender', 'Amateur','18-25',
    'Anal', 'Arab', 'Asian', 'Russian', 'Big Dick', 'Behind The Scene', 'Big Ass', 'Blowjob', 'Blonde', 'British', 'Brunette',
    'Top Trending','Most Popular',  'POV', 'Big Tits', 'Step Fantasy', 'Hardcore', 'Romantic', 'Roleplay', 'Rough Sex', 'Pussy Licking'
  ] } },
  { title: 'PORNSTARS', dropdown: true, content: { type: 'grid', links: [
'Sunny Leone','Tori Black','Asa Akira','Mia Khalifa','Mia Malkova','Lana Rhoades','jhonny Sins','Brandi Love','Nicolette Shea',
'Dani Daniels','Kendra Lust','Nicole Aniston','Angela White','Eva Elfie','Abella Danger','Riley Reid','Lisa Ann',
  ] } },
  { title: 'LIVE CAMS', dropdown: false },
  { title: 'COMMUNITY', dropdown: true, content: { type: 'links', links: ['Photos', 'GIFs', 'Upload', 'Community Rules'] } },
];

// BAAD KI FILES UNCHANGED HAIN
export const sidebarData = [
    { title: 'Recommended Videos', icon: 'FaThumbsUp', sublinks: null },
    { title: 'Hottest in India', icon: 'FaFire', sublinks: null },
    { title: 'Pornstars & Models', icon: 'FaStar', sublinks: ['Sunny Leone','Tori Black','Asa Akira','Mia Khalifa','Mia Malkova',
        'Lana Rhoades','jhonny Sins','Brandi Love','Nicolette Shea',
         'Dani Daniels','Riley Reid','Kendra Lust','Nicole Aniston','Angela White','Eva Elfie','Abella Danger','Lisa Ann'] },
    { title: 'Top Categories', icon: 'FaList', sublinks: [  'Anal', 'Arab', 'Asian', 'Russian', 'Big Dick', 'Behind The Scene', 'Big Ass', 'Blowjob',
         'Blonde, British', 'Brunette',
    'Top Trending','Most Popular', 'Indian', 'Amateurs',  'POV', 'Big Tits', 'Step Fantasy', 'Hardcore', 'Romantic', 'Roleplay', 'Rough Sex', 'Pussylicking',
     'Japanese', 'Big Tits', 'Indian', 'Lesbian', 'Threesome', 'Transgender', 'Amateur','18-25',
] },
];

export const footerData = {
  Information: ['Terms & Conditions', 'Privacy Notice'],
  'Work With Us': ['Content Partners', 'Advertise'],
  'Support and Help': ['Content Removal', 'Contact Support', 'FAQ', 'Parental Controls'],
  Discover: ['StudentsHubs Blog', 'Sexual Wellness Center', ],
};