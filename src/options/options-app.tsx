import { createRoot } from 'react-dom/client';

window.addEventListener('load', () => {
    const rootEl = document.querySelector('main')!;
    const root = createRoot(rootEl);
    root.render(
        <div>Browser Extension Options</div>
    );
});
