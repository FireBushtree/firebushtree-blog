import type { PostListItem } from './post-types'

export const postItems: PostListItem[] = [
  {
    id: 'featured-1',
    slug: 'future-ai-design',
    title: 'The Future of AI Design',
    excerpt:
      'Exploring how generative AI is reshaping the creative landscape and what it means for designers moving forward.',
    category: 'AI & DESIGN',
    readTime: '5 min read',
    date: 'Oct 24',
    author: {
      name: 'Jane Doe',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuATajAlJmeg3WzLQyMIojFTJdGjrcerWnsVToA7yq0QLplpZZbftg2-G8nnEcqYtR6hWjNwy9E5zvPze4h70HMPJ2oLdsASQECR60yydPJMBUFK88mj7xmgiboaNrwLxjPoGqHH64tXQNNEkuEvSzX78k8tSb-8BDZCbed98SOQm_ti9GReQ8OZnWvbCuO03ZmFgTLM63-pHeMx7HrQ7cdUcPDSd7QQLDUPKw6DOfa58cuzpMBwNxowMrOwBiGEiC2HisBeKDzhjS1o',
    },
    coverImage: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8rJ6z69wOf_zvtNn23loECyuYIPT_sZpqxiAiNsOtlMWqQqexSA237gyHnsh-dVNaxTNKiCiLoh71Q4c3EEekya_dB8yJ201esmY9lZv7Mk_OCE6dpUh-ESI-5CBSqcivbfBeLubMJThXTdgDtarXiC14ko6WSgfnPrdhn96IT7hYIYjTJStx4V0st8icmVDSpthjzDCuTpa3t76ZRB_1kFVMGQZ8vCryvrcGoEZsEsvA70gdrPZR7_z63KbmnfoZ0KtSny8JXKtA',
      alt: 'Abstract colorful AI generative art waves',
    },
    badge: 'Featured',
    variant: 'featured',
  },
  {
    id: 'row-1',
    slug: 'minimalism-2024',
    title: 'Minimalism in 2024',
    excerpt:
      'Why less is still more in modern interface design. Trends to watch this coming year.',
    category: 'LIFESTYLE',
    readTime: '3 min read',
    date: 'Oct 22',
    author: {
      name: 'John Smith',
    },
    coverImage: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJXlt_AT0ZUBrxJnvPWjbmwb0TXPHgg7zxcXtkWEfdkCeWdknofWcNHNhiue-ELkI4CC2K3no-6RqtzfWqZVTmpF_wjjs1qeoAD0S7cCMf_K5-lWoi_-Py2LfOpvpFWiSg7L0frSGevqcNDGM-OtTvkWhNS87xnrTMP9MdVARZJNKBhbG9Bi0aerpHklfz7UB9L9fBRkywQjVOQpWDjkLyNeNhxZrey7jPG7fGiyaIsqGFrtCvksQdkIYqiGDCZI3nZCbuGje5QrxT',
      alt: 'Clean minimalist white desk setup',
    },
    variant: 'row',
  },
  {
    id: 'row-2',
    slug: 'morning-routine',
    title: 'My Morning Routine',
    excerpt:
      'How I start my day to maximize productivity and maintain mental clarity without burning out.',
    category: 'WELLNESS',
    readTime: '6 min read',
    date: 'Oct 20',
    author: {
      name: 'Jane Doe',
    },
    coverImage: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrgzB51hECsoLiCcBAFwh3-xI-6bMOXWjXpS9nbyAIjdf2TTTmbYOJYJhxls4_PQ_x5wmXrWFSD-Piu_Zk26uUTi3cGnkuubYl69mcnpJD0trjx4xFXv8bl2olshHEH8MIkObcIDmk-orCJPDnS-WYBqGI8Bo69bEvg5QSKB_JXVrjGAdyuLDyNi7Yd16a9oFxnOpSwFHxhAOeZFnSUnTMXczoomQj8COtE89c6XWIOOzjVsEe6Sgy9O5xBYlEodTbEXhFeY4m1hfG',
      alt: 'Sunrise over a calm lake with mist',
    },
    variant: 'row',
  },
  {
    id: 'note-1',
    slug: 'state-of-css',
    title: 'Quick thought: The state of CSS',
    excerpt:
      'Container queries are finally here and they are changing everything about how we build responsive components.',
    category: 'THOUGHTS',
    readTime: '2 min read',
    date: 'Oct 18',
    author: {
      name: 'Alex Dev',
    },
    variant: 'note',
  },
]
