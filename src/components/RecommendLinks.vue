<template>
  <div className="mx-4 mt-2 mb-8">
    <div v-for="link in links" :key="link.title">
      <RecommendWords :title="link.title" :words="link.words" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecommendWords from '@/components/RecommendWords.vue';

export default defineComponent({
  name: 'RecommendLinks',
  components: {
    RecommendWords
  },
  data(): {
    links: {
      title: string;
      words: string[];
    }[];
  }{
    return {
      links: [{
        title: 'バックエンド',
        words: [
          'Ruby',
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
        ]
      },{
        title: 'フロントエンド',
        words: [
          'TypeScript',
          'React',
          'Next.js',
          'Vue.js',
          'Nuxt.js',
          'HTML',
          'CSS',
          'JavaScript',
          'Angular',
        ]
      },{
        title: 'モバイルアプリ',
        words: [
          'Swift',
          'Kotlin',
          'Flutter',
          'Dart',
          'ReactNative',
          'Objective-C',
        ]
      },{
        title: 'インフラ',
        words: [
          'Docker',
          'Kubernetes',
          'Terraform',
          'AWS',
          'GCP',
          'Azure',
          'nginx',
          'Firebase',
        ]
      },{
        title: 'データベース',
        words: [
          'データベース',
          'SQL',
          'MySQL',
          'PostgreSQL',
        ]
      },{
        title: '設計・テスト',
        words: [
         'システム設計',
         'ドメイン駆動設計',
         'マイクロサービス',
         'デザインパターン',
         'ソフトウェアテスト',
        ]
      }
    ]}
  },
});
</script>
