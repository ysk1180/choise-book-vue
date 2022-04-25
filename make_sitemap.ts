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
    'Ruby', // バックエンド
    'Rails',
    'PHP',
    'Laravel',
    'Python',
    'Django',
    'Flask',
    'Go言語',
    'Java',
    'Node.js',
    'C言語',
    'C#',
    'C++',

    'TypeScript', // フロントエンド
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',

    'Swift', // モバイルアプリ
    'Kotlin',
    'Flutter',
    'Dart',
    'ReactNative',
    'Objective-C',

    'Docker', // インフラ
    'Kubernetes',
    'Terraform',
    'AWS',
    'GCP',
    'Azure',
    'nginx',
    'Firebase',

    'データベース', // データベース
    'SQL',
    'MySQL',
    'PostgreSQL',

    'システム設計', // 設計・テスト
    'ドメイン駆動設計',
    'マイクロサービス',
    'デザインパターン',
    'ソフトウェアテスト',

    'ネットワーク', // ネットワーク・セキュリティ
    'TCP,IP',
    'セキュリティ',
    '脆弱性',

    '機械学習', // 機械学習
    'AI',
    'データサイエンス',
    'ディープラーニング',
    'Kaggle',

    'Webデザイン', // デザイン
    'Illustrator',
    'Photoshop',
    'AdobeXD',
    'UI',
    'UX',

    'アジャイル', // その他
    'スクラム',
    'アルゴリズム',
    'Linux',
    'API',
    'GraphQL',
    'SEO',
    'WordPress',

    'ITパスポート', // TOPページ非掲載
    '基本情報技術者',
    '応用情報技術者',
    'LPIC',
    'UNIX',
    'shell',
    'リファクタリング',
    'Unity',
    'AWSLambda',
    'ラズパイ',
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
