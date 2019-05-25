import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
  },
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/fulls/09.jpg'),
    thumbnail: require('../assets/images/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/fulls/10.jpg'),
    thumbnail: require('../assets/images/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
  },
  {
    src: require('../assets/images/fulls/11.jpg'),
    thumbnail: require('../assets/images/thumbs/11.jpg'),
    title: 'Conscious',
    desc: 'Be one with the self',
  },
  {
    src: require('../assets/images/fulls/12.jpg'),
    thumbnail: require('../assets/images/thumbs/12.jpg'),
    title: 'Nature',
    desc: 'Be one with the nature',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
