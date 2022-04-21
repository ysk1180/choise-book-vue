const fs = require('fs'); // eslint-disable-line

const sitemap = () => {
  const baseUrl = "https://teckbook.net/"
  let xml = '';

  const paths = [
    '',
    'about'
  ]

  paths.map((path) => {
    xml += `<url>
      <loc>${baseUrl}${path}</loc>
    </url>`;
  });

  const words = [
    'Ruby',
    'Rails',
    'PHP',
    'Laravel',
    'Python',
    'Django',
    'Go言語',
    'Java',
    'C言語',
    'C#',
    'C++',

    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',

    'Swift',
    'Kotlin',
    'Flutter',
    'Dart',

    'Docker',
    'Kubernetes',
    'AWS',
    'GCP',
    'Azure',

    'データベース',
    'SQL',
    'MySQL',
    'PostgreSQL',

    '基本情報技術者',
    '応用情報技術者',
    'LPIC',

    'Linux',
    'UNIX',
    'shell',
    'TCP,IP',
    '機械学習',
    'データサイエンス',
    'ディープラーニング',
    '人工知能',
    'Kaggle',
    'システム設計',
    'ドメイン駆動設計',
    'ソフトウェアテスト',
    'アジャイル',
    'スクラム',
    'セキュリティ',
    'ネットワーク',
    'アルゴリズム',
    'API',
    'SEO',
    'WordPress',
    'ラズパイ',
    'Webデザイン',
    'Illustrator',
    'Photoshop',
    'メタバース',
    'Web3',
    'ブロックチェーン',
    'NFT',
    'VBA',
    'プログラミング',
  ]

  words.map((word) => {
    xml += `<url>
      <loc>${baseUrl}search/${word}</loc>
    </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xml}
    </urlset>`;
};

const generateSitemap = () => {

  // フィード情報を /public/articles 配下にディレクトリを作って保存
//   fs.mkdirSync('./public/articles', { recursive: true });
  fs.writeFileSync('./public/sitemap.xml', sitemap());
};

generateSitemap()
