<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content lives in `src/content/portfolio.ts`; components only render it — keeps copy edits out of layout code.
- All visual styling uses tokens/classes in `src/styles.css` ("Ink & Mist" system); no hardcoded colors in components.
