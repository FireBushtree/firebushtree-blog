import type { PostDetail } from './detail-types'

export const postDetails: PostDetail[] = [
  {
    slug: 'future-ai-design',
    title: 'The Future of Minimalist Design in 2024',
    category: 'Design',
    readTime: '5 min read',
    date: 'Oct 14, 2023',
    author: {
      name: 'Jane Doe',
      avatarUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB0VszJBSaYEsaXywCYuqSvWxYmtGL9Dk8rgWqnFmMlgLfl59yIpIpPkjZ_zc3QyPIJvKa5QgGqQ0vOJ_xjIWIQv7yOlllf7J9ah4AJrkyfp8SHresjp6XZfhbhKgGIATbb__EHF1OU2H1zSz-2vElVci80ohs-O7VWWfED8HdEAyG0gHnYo3NjHQZU3L3FEVP9U5QqF9MwKkmaJkPWNAgZMR6dsrpTFaUbniE37GLsbC8BDmO7CpN_d5BsWD5342q5kkqy0yFOCLwm',
    },
    heroImage: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiH8aP3yPAGpmUg3l5o9FvNlINoezzyOaZgiRCVafuVjYzy3_EZmAZb-RPeF7wPrnHKEZ7SHaULa5nvILzVLdaeZebjSPZU6uRSO2QWqXzJKOF5aYeVcF22F72yV2k_-7RQHkdpqGnutrsNCy6LG-yTwNTVM0Srs3ZKliXhAM9bggp6ZAez6gCRCfsWXBrfNlW6kt7QJd9CMW_TN2roE0J7ARtfjMjCH-HvHQdHwKIdWV_hTRRv-WsH7tWs7F2IxyjBBnm5auRca4B',
      alt: 'Abstract minimalist geometric architecture with blue sky',
    },
    lead:
      "Minimalism isn't just a visual style; it's a philosophy that strips away the non-essential to focus on what truly matters.",
    paragraphs: [
      "For years, digital interfaces have been dominated by stark contrasts and rigid grids. The new wave of minimalism introduces softer palettes, rounded corners, and subtle textures that invite interaction rather than demanding it.",
      "This evolution isn't just aesthetic; it's functional. By reducing cognitive load through smarter spacing and hierarchy, designers are creating apps that feel intuitive from the first tap.",
      'We are also seeing a resurgence of serif typography in headers, paired with clean sans-serif body text. The goal is to make reading on a screen as comfortable as reading a book.',
      'Ultimately, the future of design lies in empathy. It is about creating spaces that allow us to think, breathe, and create without distraction.',
    ],
    quote: {
      text: 'Design is not just what it looks like and feels like. Design is how it works.',
      author: 'Steve Jobs',
    },
    inlineImage: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbmkvwv6QT8U3V2mFSX4ymWz1mBPbFzbCQ4ZUsWIvWH0PfyGvhYWbR2jBhYUq45MIRdHIONJ65T6vn8woqOXbOT63T7xywlz0N-UD3WNtzJR-gi92g8JbnYRhXp9mBf7mke9FcBLDsV5dQ99InNERZTs2Zj8uDv9bN6aXjVW-lV4yiApw-SdY8Om1610M6IKD340bB1oIuBFgaQmpO35wPSYC6AAnK4ALc1G78hD_yBAEaTAiPgRrwloII90NnJ3TrJjeWzCx83kzB',
      alt: 'Close up of a clean modern desk workspace setup',
      caption: 'A workspace that reflects the principles of modern reductionism.',
    },
    tags: ['#Minimalism', '#UI/UX', '#ProductDesign', '#2024Trends'],
    stats: {
      likes: '1.2k',
      comments: '12',
    },
    comments: [
      {
        id: 'comment-1',
        author: 'Mark Thompson',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDKnPdh2WqmMfXVxqLkvxY6K5Mn3cAl2QJM9jYzntWRwz-toHB77QSWACGXUBsc95hc-K6Q-mZ50pF6pGL11J_vUreCPZxxaGvZOdCXnaQb8kVcbrpRUCXrn9ht9bh0jm9aGRp2BKWZe1GzkEeZs00ikzPHDAf5HHrDA9YLaSSby8G3QsnJ-yz5EFsHWGyYBg4IIKRnUKcHFBnmrQe6E6Hcwm_fqVmPqdmX3ST72JFSWR6XC6ltO0Q5jZRLcV6U8id1mDt0bLgIRZ5F',
        timeAgo: '2h ago',
        content:
          'Great read! The point about warm minimalism is spot on. We need more humanity in our digital spaces.',
        likes: 24,
      },
      {
        id: 'comment-2',
        author: 'Sarah Chen',
        avatarUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCoUsxhemnROLaGML8ik3vtN2IVq6N5Ue5sewbkA86tTmZOIw8SQvTqaFUSaR4VZp8-Q8RMoGqPXBUdtdsNv8AthDnGhxBhvc3yL66vlWXbVrWHW7JUZsm_C9T7H4SLXC0woUEVBsCzojwe_W2aTc4CrNZP_nncVgOYlEWguEcnkni9LrppjmTwex3q9ni6u8ubZTBsnpk-Myw4ZRRTZT1cK6ooGPyK3Qp0zv94Gdd__nwZ3tk5fFJbivnHhvx4cc0YqombLahr71Xa',
        timeAgo: '5h ago',
        content:
          "I'm curious how this applies to data-heavy dashboards. Minimalism is great for blogs, but functionality shouldn't be sacrificed.",
        likes: 15,
      },
    ],
  },
]
