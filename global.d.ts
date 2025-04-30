declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}
interface ImportMetaEnv {
    VITE_NEWS_BASE_API_URL: string;
    VITE_NEWS_API_KEY:string;
    // Добавьте другие переменные окружения здесь
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
declare module '*.svg' {
    const content: string;
    export default content;
}