# Color Tokens

## Scope
Shared color tokens for the app. Use these variables instead of hardcoded
colors in components and pages.

## Source of Truth
- `src/styles/color-tokens.css`
- `src/app/globals.css` maps tokens into Tailwind via `@theme inline`

## Theme Strategy
- Base theme in `:root`
- Dark theme overrides in `[data-theme="dark"]`
- Do not use `-light` or `-dark` suffixes in variable names

## Tokens
| Token | Role | Notes |
| --- | --- | --- |
| `--background` | Page background | Used by `bg-background` |
| `--foreground` | Default text | Used by `text-foreground` |
| `--card` | Card surface | Used by `bg-card` |
| `--card-foreground` | Card text | Used by `text-card-foreground` |
| `--popover` | Popover surface | Used by `bg-popover` |
| `--popover-foreground` | Popover text | Used by `text-popover-foreground` |
| `--primary` | Brand accent | Used by `bg-primary`, `text-primary` |
| `--primary-foreground` | Text on primary | Used by `text-primary-foreground` |
| `--secondary` | Secondary surface | Used by `bg-secondary` |
| `--secondary-foreground` | Secondary text | Used by `text-secondary-foreground` |
| `--muted` | Muted surface | Used by `bg-muted` |
| `--text-secondary` | Secondary text | Used by `text-text-secondary` |
| `--muted-foreground` | Muted text | Used by `text-muted-foreground` |
| `--accent` | Accent surface | Used by `bg-accent` |
| `--accent-foreground` | Accent text | Used by `text-accent-foreground` |
| `--destructive` | Destructive action | Used by `bg-destructive` |
| `--border` | Border color | Used by `border-border` |
| `--input` | Input border | Used by `border-input`, `bg-input` |
| `--ring` | Focus ring | Used by `ring-ring` |

## Adding New Tokens
1. Add the variable to `src/styles/color-tokens.css` in both themes.
2. Expose it in `src/app/globals.css` under `@theme inline`.
