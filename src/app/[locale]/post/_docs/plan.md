# Post 页面计划

## 目标
- 在 `app/[locale]/post` 新建文章列表页，参考 `docs/ui-code/list.html`。
- 组件单一职责拆分到 `_components`，工具方法放在 `_lib`。
- 文本使用 `typo-*`，颜色使用 `src/styles/color-tokens.css` 中的 token。

## 计划路由
- `src/app/[locale]/post/page.tsx`

## 约束
- 不创建 `floating-action` 组件。
- `post-card` 作为整体组件，不再拆分 meta/footer 等子组件。

## 目录结构建议
```
src/app/[locale]/post/
  page.tsx
  _components/
    post-list.tsx
    post-card.tsx
  _lib/
    post-data.ts
    post-types.ts
    post-utils.ts
  _docs/
    plan.md
```

## 组件职责
- `post-list.tsx`: 列表布局渲染与卡片变体选择。
- `post-card.tsx`: 统一卡片组件，内部包含 meta/footer 与 CTA。
- `page.tsx`: 复用 `NavBar`，组织页面结构并渲染 `post-list`。

## 数据结构（草案）
```
type PostVariant = 'featured' | 'row' | 'note'

type PostListItem = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: {
    name: string
    avatarUrl?: string
  }
  coverImage?: {
    src: string
    alt: string
  }
  variant: PostVariant
}
```

## 样式说明
- 文本统一使用 `typo-*` utilities。
- 优先使用语义 token：`bg-background`、`text-foreground`、`text-text-secondary`。
- 深色模式由 `src/styles/color-tokens.css` 在 `[data-theme="dark"]` 中覆盖，不必额外写 `dark:`。
- 仅在使用非 token 颜色（如渐变、阴影、图片叠层）时补 `dark:`。

## 已确认项
1. 顶部导航复用现有 `NavBar`，调整样式以匹配 list.html（右侧功能不改）。
2. 图标使用现有图标库。
3. 字体继续使用 Work Sans（现有方案）。
4. 图片先用远程 URL，后续再优化为本地资源。
5. i18n 暂不处理。
6. 数据先使用 `_lib` 的 mock。
7. 路由确认 `/post` 为列表页，详情走 `/post/[slug]`。
