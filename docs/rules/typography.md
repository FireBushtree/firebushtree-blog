# Typography Utilities 编码规范

## 适用范围
本规范用于博客系统的文字样式统一与移动端优先适配，所有正文/标题/说明文字均应使用本文件定义的 `typo-*` utilities。

## 命名规则
- 前缀：`typo-`
- 结构：`typo-<group><size>`
- group 对应：`h`(Headlines) / `t`(Title) / `m`(Medium) / `b`(Body) / `c`(Caption)
- size 为字号数值（px）

## 断点规则
- base：移动端（默认）
- `md`：平板（≥ 768）
- `lg`：桌面（≥ 1024，等同 Figma 尺度）
- 不使用 `sm` / `xl`

## 定义位置
统一在 `src/styles/typography-utilities.css` 的 `@layer utilities` 中定义，并由 `src/app/globals.css` 通过 `@import` 引入；页面与组件只引用类名，不直接写 `text-[...]`。

## 使用规则
- 每个文本节点仅使用一个 `typo-*` 类
- 语义标签优先（如 `h1`/`h2`/`p`/`span`），class 只负责样式
- 字号如为奇数，统一向下取整为偶数（如 13px → 12px）
- 新增或调整字号时，必须同步更新本文件与 `src/styles/typography-utilities.css`

## Utilities 列表
| Class | Font Weight | Line Height | Base (mobile) | md | lg (desktop) |
|---|---:|---:|---:|---:|---:|
| `typo-h56` | 700 | 1.2 | 32px | 40px | 56px |
| `typo-h48` | 700 | 1.2 | 28px | 36px | 48px |
| `typo-h40` | 700 | 1.2 | 24px | 32px | 40px |
| `typo-h32` | 700 | 1.2 | 22px | 28px | 32px |
| `typo-t32` | 600 | 1.4 | 20px | 24px | 32px |
| `typo-t24` | 600 | 1.4 | 18px | 20px | 24px |
| `typo-t20` | 600 | 1.4 | 16px | 18px | 20px |
| `typo-t18` | 600 | 22px | 16px | 18px | 18px |
| `typo-t16` | 600 | 1.4 | 14px | 16px | 16px |
| `typo-t14` | 600 | 1.4 | 12px | 14px | 14px |
| `typo-t12` | 600 | 16px | 12px | 12px | 12px |
| `typo-m24` | 500 | 1.4 | 18px | 20px | 24px |
| `typo-m20` | 500 | 1.4 | 16px | 18px | 20px |
| `typo-m18` | 500 | 1.4 | 16px | 18px | 18px |
| `typo-m16` | 500 | 1.4 | 14px | 16px | 16px |
| `typo-m14` | 500 | 1.4 | 12px | 14px | 14px |
| `typo-m12` | 500 | 1.4 | 12px | 12px | 12px |
| `typo-b16` | 400 | 1.4 | 14px | 16px | 16px |
| `typo-b14` | 400 | 1.4 | 12px | 14px | 14px |
| `typo-c12` | 400 | 16px | 12px | 12px | 12px |
| `typo-c11` | 400 | 1.4 | 10px | 10px | 10px |

## 使用示例
```tsx
export default function TypographyDemo() {
  return (
    <section className="space-y-4">
      <h1 className="typo-h56">博客标题</h1>
      <h2 className="typo-h32">分区标题</h2>
      <p className="typo-b16">
        这是正文内容，适用于文章段落与说明文字。
      </p>
      <p className="typo-b14 text-muted-foreground">
        补充说明文字，建议使用较浅颜色。
      </p>
      <span className="typo-c11 text-muted-foreground">更新时间 · 2025-01-01</span>
    </section>
  );
}
```

## 定义示例
```css
@layer utilities {
  .typo-h56 {
    @apply text-[32px] leading-[1.2] font-bold md:text-[40px] lg:text-[56px];
  }
}
```
