const icons = {
	"accessibility_new": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M41.5 13.98c-.28-1.1-1.38-1.74-2.48-1.5C34.26 13.54 28.96 14 24 14c-4.96 0-10.26-.46-15.02-1.52-1.1-.24-2.2.4-2.48 1.5-.28 1.12.4 2.26 1.5 2.52 3.22.72 6.7 1.22 10 1.5v24c0 1.1.9 2 2 2s2-.9 2-2V32h4v10c0 1.1.9 2 2 2s2-.9 2-2V18c3.3-.28 6.78-.78 9.98-1.5 1.12-.26 1.8-1.4 1.52-2.52zM24 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z\" fill=\"inherit\"/></svg>",
	"account_circle": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 8c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 28c-4.06 0-8.86-1.64-12.28-5.76C15.1 31.6 19.36 30 24 30s8.9 1.6 12.28 4.24C32.86 38.36 28.06 40 24 40z\" fill=\"inherit\"/></svg>",
	"alarm": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 8C14.06 8 6 16.06 6 26s8.06 18 18 18 18-8.06 18-18S33.94 8 24 8zm7 25c-.78.78-2.04.78-2.82 0l-5.58-5.58c-.38-.38-.6-.88-.6-1.42v-8c0-1.1.9-2 2-2s2 .9 2 2v7.18l5 5c.78.78.78 2.04 0 2.82zM9.76 6.1L4.1 11.76c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0l5.66-5.66c.78-.78.78-2.04 0-2.82-.78-.78-2.04-.78-2.82 0zm25.66 0c-.78.78-.78 2.04 0 2.82l5.66 5.66c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L38.24 6.1c-.78-.78-2.04-.78-2.82 0z\" fill=\"inherit\"/></svg>",
	"alarm_add": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 8C14.06 8 6 16.06 6 26s8.06 18 18 18 18-8.06 18-18S33.94 8 24 8zm6 20h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4v-4c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2zM12.58 8.92c.78-.78.78-2.04 0-2.82-.78-.78-2.04-.78-2.82 0L4.1 11.76c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0l5.66-5.66zM43.9 11.76L38.24 6.1c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82l5.66 5.66c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82z\" fill=\"inherit\"/></svg>",
	"alarm_off": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M42 26c0-9.94-8.06-18-18-18-3 0-5.82.74-8.3 2.04L39.96 34.3C41.26 31.82 42 29 42 26zM43.9 11.76L38.24 6.1c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82l5.66 5.66c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82zM2.78 5.62C2 6.4 2 7.66 2.78 8.44l2.32 2.32-1 1c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0l1-1 1.66 1.66c-2.8 3.74-4.2 8.58-3.34 13.78 1.22 7.48 7.26 13.5 14.74 14.74 5.2.86 10.02-.54 13.76-3.34l4.8 4.8c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L5.62 5.62c-.78-.78-2.06-.78-2.84 0z\" fill=\"inherit\"/></svg>",
	"alarm_on": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 8C14.06 8 6 16.06 6 26s8.06 18 18 18 18-8.06 18-18S33.94 8 24 8zm7.78 16.1l-8.48 8.48c-.78.78-2.04.78-2.82 0l-4.24-4.24c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0l2.82 2.82 7.08-7.08c.78-.78 2.04-.78 2.82 0 .78.8.78 2.06 0 2.84zM12.58 8.92c.78-.78.78-2.04 0-2.82-.78-.78-2.04-.78-2.82 0L4.1 11.76c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0l5.66-5.66zM43.9 11.76L38.24 6.1c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82l5.66 5.66c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82z\" fill=\"inherit\"/></svg>",
	"all_inbox": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M6 12c-1.1 0-2 .9-2 2v26c0 2.2 1.8 4 4 4h26c1.1 0 2-.9 2-2s-.9-2-2-2H8V14c0-1.1-.9-2-2-2zm34-8H16c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zm0 18h-6.3c-.84 0-1.64.48-1.9 1.26A4.014 4.014 0 0128 26c-1.76 0-3.26-1.14-3.8-2.74-.26-.78-1.08-1.26-1.9-1.26H16V8h24v14z\" fill=\"inherit\"/></svg>",
	"announcement": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40 4H8C5.8 4 4 5.8 4 8v31.18c0 1.78 2.16 2.68 3.42 1.42L12 36h28c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 22c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"app_blocking": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M28 24c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8zm8 5c-2.76 0-5-2.24-5-5 0-.84.22-1.6.58-2.3l6.72 6.72c-.7.36-1.46.58-2.3.58zm5-5c0 .84-.22 1.6-.58 2.3l-6.72-6.72c.7-.36 1.46-.58 2.3-.58 2.76 0 5 2.24 5 5z\" fill=\"inherit\"/><path d=\"M34 36H14V12h20v2h4V6c0-2.2-1.8-4-4-4H14c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4v-8h-4v2z\" fill=\"inherit\"/></svg>",
	"arrow_circle_down": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 8c8.82 0 16 7.18 16 16s-7.18 16-16 16S8 32.82 8 24 15.18 8 24 8zm0-4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm2 20v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6h-3.58c-.9 0-1.34 1.08-.7 1.7l5.58 5.58c.4.4 1.02.4 1.42 0l5.58-5.58c.62-.62.18-1.7-.7-1.7H26z\" fill=\"inherit\"/></svg>",
	"arrow_circle_up": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 40c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm0 4c11.04 0 20-8.96 20-20S35.04 4 24 4 4 12.96 4 24s8.96 20 20 20zm-2-20v6c0 1.1.9 2 2 2s2-.9 2-2v-6h3.58c.9 0 1.34-1.08.7-1.7l-5.58-5.58a.99.99 0 00-1.42 0L17.7 22.3c-.62.62-.18 1.7.72 1.7H22z\" fill=\"inherit\"/></svg>",
	"article": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38 6H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zM26 34H16c-1.1 0-2-.9-2-2s.9-2 2-2h10c1.1 0 2 .9 2 2s-.9 2-2 2zm6-8H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"assignment": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38 6h-8.36C28.8 3.68 26.6 2 24 2c-2.6 0-4.8 1.68-5.64 4H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm-14-.5c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5-1.5-.68-1.5-1.5.68-1.5 1.5-1.5zM26 34H16c-1.1 0-2-.9-2-2s.9-2 2-2h10c1.1 0 2 .9 2 2s-.9 2-2 2zm6-8H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"assignment_late": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38 6h-8.36C28.8 3.68 26.6 2 24 2c-2.6 0-4.8 1.68-5.64 4H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm-14-.5c.82 0 1.5.68 1.5 1.5s-.68 1.5-1.5 1.5-1.5-.68-1.5-1.5.68-1.5 1.5-1.5zM24 26c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2zm2 6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z\" fill=\"inherit\"/></svg>",
	"autorenew": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M12.7 27.98C10.02 20.58 15.42 12 24 12v3.58c0 .9 1.08 1.34 1.7.7l5.58-5.58c.4-.4.4-1.02 0-1.42L25.7 3.7c-.62-.62-1.7-.18-1.7.72V8C12.48 8 5.22 19.56 9.04 29.58c.48 1.26 2.16 1.56 3.12.6l.16-.16c.52-.52.64-1.32.38-2.04zM35.28 20.04C38.02 27.72 32.34 36 24 36v-3.58c0-.9-1.08-1.34-1.7-.7l-5.58 5.58a.99.99 0 000 1.42l5.58 5.58c.62.62 1.7.18 1.7-.7V40c11.52 0 18.78-11.56 14.96-21.58-.48-1.26-2.16-1.56-3.12-.6l-.14.14c-.54.54-.66 1.34-.42 2.08z\" fill=\"inherit\"/></svg>",
	"book": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M8 8v32c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4H12C9.8 4 8 5.8 8 8zm14 0h10v12.24c0 .78-.84 1.26-1.52.86L27 19l-3.48 2.1c-.66.4-1.52-.08-1.52-.86V8z\" fill=\"inherit\"/></svg>",
	"bookmark": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M34 6H14c-2.2 0-4 1.8-4 4v28.96c0 1.44 1.46 2.4 2.78 1.84L24 36l11.22 4.8c1.32.56 2.78-.4 2.78-1.84V10c0-2.2-1.8-4-4-4z\" fill=\"inherit\"/></svg>",
	"bookmarks": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M30 10H10c-2.2 0-4 1.8-4 4v28.96c0 1.44 1.46 2.4 2.78 1.84L20 40l11.22 4.8c1.32.56 2.78-.4 2.78-1.84V14c0-2.2-1.8-4-4-4zm10 30c1.1 0 2-.9 2-2V6c0-2.2-1.8-4-4-4H14c-1.1 0-2 .9-2 2s.9 2 2 2h24v32c0 1.1.9 2 2 2z\" fill=\"inherit\"/></svg>",
	"bookmark_add": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M42 12c0 1.1-.9 2-2 2h-2v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2V8c0-1.1.9-2 2-2s2 .9 2 2v2h2c1.1 0 2 .9 2 2zm-4 26.96c0 1.44-1.46 2.4-2.78 1.84L24 36l-11.22 4.8c-1.32.58-2.78-.4-2.78-1.84V10c0-2.2 1.8-4 4-4h14c-1.26 1.68-2 3.74-2 6 0 5.52 4.48 10 10 10 .68 0 1.36-.06 2-.2v17.16z\" fill=\"inherit\"/></svg>",
	"bookmark_added": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M10 10c0-2.2 1.8-4 4-4h14c-1.26 1.68-2 3.74-2 6 0 5.52 4.48 10 10 10 .68 0 1.36-.06 2-.2v17.16c0 1.44-1.46 2.4-2.78 1.84L24 36l-11.22 4.8c-1.32.58-2.78-.4-2.78-1.84V10zm34.14-3.32c.78.78.78 2.04 0 2.82l-7.08 7.08c-.78.78-2.04.78-2.82 0l-2.82-2.82c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0l1.42 1.42 5.66-5.66c.78-.8 2.04-.8 2.82-.02z\" fill=\"inherit\"/></svg>",
	"bookmark_border": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M34 6H14c-2.2 0-4 1.8-4 4v32l14-6 14 6V10c0-2.2-1.8-4-4-4zm0 30l-10-4.36L14 36V12c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v24z\" fill=\"inherit\"/></svg>",
	"bookmark_remove": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M42 12c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8c1.1 0 2 .9 2 2zm-4 9.8c-.64.14-1.32.2-2 .2-5.52 0-10-4.48-10-10 0-2.26.74-4.32 2-6H14c-2.2 0-4 1.8-4 4v28.96c0 1.44 1.46 2.4 2.78 1.84L24 36l11.22 4.8c1.32.56 2.78-.4 2.78-1.84V21.8z\" fill=\"inherit\"/></svg>",
	"build": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M39.3 32.22L29.24 22.16c.84-2.28 1.06-4.86.26-7.56-1.22-4.16-4.68-7.44-8.9-8.34-3.38-.7-6.58.02-9.12 1.68l7.28 7.28-3.54 3.54-7.28-7.28c-1.66 2.54-2.38 5.74-1.66 9.12.9 4.24 4.18 7.7 8.32 8.9 2.72.8 5.3.58 7.56-.26L32.22 39.3a4.997 4.997 0 007.08 0 5.034 5.034 0 000-7.08z\" fill=\"inherit\"/></svg>",
	"calendar_today": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38 8h-2V6c0-1.1-.9-2-2-2s-2 .9-2 2v2H16V6c0-1.1-.9-2-2-2s-2 .9-2 2v2h-2c-2.22 0-3.98 1.8-3.98 4L6 40c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 32H10V20h28v20z\" fill=\"inherit\"/></svg>",
	"check_circle": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm9.9 16.46L22.58 31.78c-.78.78-2.04.78-2.82 0l-5.66-5.66c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0l4.24 4.24 9.9-9.9c.78-.78 2.04-.78 2.82 0 .8.78.8 2.04.02 2.82z\" fill=\"inherit\"/></svg>",
	"check_circle_outline": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm7.08-22.36l-9.9 9.9-4.24-4.24c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82l5.66 5.66c.78.78 2.04.78 2.82 0l11.32-11.32c.78-.78.78-2.04 0-2.82-.8-.78-2.06-.78-2.84 0z\" fill=\"inherit\"/></svg>",
	"close_fullscreen": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M42.58 8.24l-9.18 9.18 3.18 3.18c1.26 1.26.36 3.42-1.42 3.42H26c-1.1 0-2-.9-2-2v-9.2c0-1.78 2.16-2.68 3.42-1.42l3.18 3.18 9.18-9.18c.78-.78 2.04-.78 2.82 0 .76.8.76 2.06-.02 2.84zM8.24 42.58l9.18-9.18 3.18 3.18c1.26 1.26 3.42.36 3.42-1.42V26c0-1.1-.9-2-2-2h-9.2c-1.78 0-2.68 2.16-1.42 3.42l3.18 3.18-9.18 9.18c-.78.78-.78 2.04 0 2.82.8.76 2.06.76 2.84-.02z\" fill=\"inherit\"/></svg>",
	"comment_bank": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40 4H8C5.8 4 4 5.8 4 8v31.18c0 1.78 2.16 2.68 3.42 1.42L12 36h28c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zm-3.52 19.1L33 21l-3.48 2.1c-.66.4-1.52-.08-1.52-.86V8h10v14.24c0 .78-.84 1.26-1.52.86z\" fill=\"inherit\"/></svg>",
	"contact_page": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M26.34 4H12C9.8 4 8 5.8 8 8v32c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V17.66c0-1.06-.42-2.08-1.18-2.82l-9.66-9.66A3.932 3.932 0 0026.34 4zM24 20c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm8 16H16v-1.14c0-1.62.96-3.06 2.44-3.7a13.901 13.901 0 0111.12 0c1.48.64 2.44 2.08 2.44 3.7V36z\" fill=\"inherit\"/></svg>",
	"dangerous": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M29.8 6H18.2c-1.06 0-2.08.42-2.84 1.18l-8.2 8.2C6.42 16.12 6 17.14 6 18.2v11.6c0 1.06.42 2.08 1.18 2.82l8.2 8.2c.74.76 1.76 1.18 2.82 1.18h11.6c1.06 0 2.08-.42 2.82-1.18l8.2-8.2c.76-.74 1.18-1.76 1.18-2.82V18.2c0-1.06-.42-2.08-1.18-2.82l-8.2-8.2A3.932 3.932 0 0029.8 6zm1.28 25.08c-.78.78-2.04.78-2.82 0L24 26.82l-4.24 4.24c-.78.78-2.04.78-2.82 0-.78-.78-.78-2.04 0-2.82L21.18 24l-4.26-4.24c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0L24 21.18l4.24-4.24c.78-.78 2.04-.78 2.82 0 .78.78.78 2.04 0 2.82L26.82 24l4.24 4.24c.8.78.8 2.06.02 2.84z\" fill=\"inherit\"/></svg>",
	"delete": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zM36 8h-5l-1.42-1.42c-.36-.36-.88-.58-1.4-.58h-8.36c-.52 0-1.04.22-1.4.58L17 8h-5c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2z\" fill=\"inherit\"/></svg>",
	"favorite": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M21.34 39.6C10.3 29.7 3.9 24.32 4 16.82c.08-5.94 4.6-8.78 4.7-8.86 7.22-4.92 13.78.44 15.3 2.22 1.5-1.76 7.98-7.02 15.12-2.32 1.04.68 4.46 3.3 4.84 8.24.64 8.56-8.28 15.52-17.3 23.52-.76.68-1.72 1-2.68 1-.94 0-1.88-.34-2.64-1.02z\" fill=\"inherit\"/></svg>",
	"favorite_border": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M39.32 7.98c-5.28-3.6-11.8-1.92-15.32 2.2-3.52-4.12-10.04-5.82-15.32-2.2C5.88 9.9 4.12 13.14 4 16.56c-.28 7.76 6.6 13.98 17.1 23.52l.2.18a3.992 3.992 0 005.38-.02l.22-.2C37.4 30.52 44.26 24.3 44 16.54c-.12-3.4-1.88-6.64-4.68-8.56zM24.2 37.1l-.2.2-.2-.2C14.28 28.48 8 22.78 8 17c0-4 3-7 7-7 3.08 0 6.08 1.98 7.14 4.72h3.74C26.92 11.98 29.92 10 33 10c4 0 7 3 7 7 0 5.78-6.28 11.48-15.8 20.1z\" fill=\"inherit\"/></svg>",
	"feedback": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40 4H8C5.8 4 4 5.8 4 8v31.18c0 1.78 2.16 2.68 3.42 1.42L12 36h28c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 22c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"filter_alt": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M8.42 11.22C12.46 16.4 20 26 20 26v10c0 2.2 1.8 4 4 4s4-1.8 4-4V26s7.54-9.6 11.58-14.78C40.6 9.9 39.66 8 38 8H10c-1.66 0-2.6 1.9-1.58 3.22z\" fill=\"inherit\"/></svg>",
	"find_in_page": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M28.04 32.86c-1.6.94-3.54 1.4-5.64.96-3.28-.68-5.9-3.44-6.34-6.76-.68-5.26 3.74-9.7 9-9 3.32.44 6.08 3.04 6.76 6.34.44 2.1-.02 4.04-.96 5.64L40 39.18V17.44c0-.94-.32-1.84-.92-2.56L31.2 5.44A3.97 3.97 0 0028.12 4H12C9.8 4 8 5.8 8 8v32c0 2.2 1.8 4 4 4h24c.9 0 1.7-.3 2.38-.8L28.04 32.86z\" fill=\"inherit\"/><path d=\"M24 30a4 4 0 100-8 4 4 0 000 8z\" fill=\"inherit\"/></svg>",
	"fit_screen": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M36 8h4c2.2 0 4 1.8 4 4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-4c-1.1 0-2-.9-2-2s.9-2 2-2zM8 16v-4h4c1.1 0 2-.9 2-2s-.9-2-2-2H8c-2.2 0-4 1.8-4 4v4c0 1.1.9 2 2 2s2-.9 2-2zm32 16v4h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c2.2 0 4-1.8 4-4v-4c0-1.1-.9-2-2-2s-2 .9-2 2zm-28 4H8v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 2.2 1.8 4 4 4h4c1.1 0 2-.9 2-2s-.9-2-2-2zm20-20H16c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4z\" fill=\"inherit\"/></svg>",
	"help": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm-.3 32a2.51 2.51 0 01-2.52-2.52c0-1.42 1.12-2.5 2.52-2.5 1.42 0 2.5 1.08 2.5 2.5 0 1.38-1.08 2.52-2.5 2.52zm6.02-14.8c-1.52 2.22-2.96 2.92-3.74 4.34-.18.34-.3.62-.38 1.18-.12.92-.86 1.64-1.8 1.64h-.08c-1.06 0-1.9-.9-1.8-1.96.06-.66.22-1.36.6-2 .98-1.74 2.84-2.78 3.92-4.32 1.14-1.62.5-4.66-2.74-4.66-1.48 0-2.42.78-3.02 1.7-.44.68-1.36.92-2.14.6-1-.42-1.44-1.66-.82-2.58 1.22-1.82 3.26-3.14 5.94-3.14 2.96 0 4.98 1.34 6.02 3.04.88 1.44 1.4 4.14.04 6.16z\" fill=\"inherit\"/></svg>",
	"help_outline": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-8h4v4h-4v-4zm3.22-19.92a8.004 8.004 0 00-8.86 5.58C16 18.82 16.88 20 18.1 20h.4c.82 0 1.48-.58 1.76-1.34.64-1.78 2.54-3 4.6-2.56 1.9.4 3.3 2.26 3.14 4.2-.2 2.68-3.24 3.26-4.9 5.76 0 .02-.02.02-.02.04-.02.04-.04.06-.06.1-.18.3-.36.64-.5 1-.02.06-.06.1-.08.16-.02.04-.02.08-.04.14-.24.68-.4 1.5-.4 2.5h4c0-.84.22-1.54.56-2.14.04-.06.06-.12.1-.18.16-.28.36-.54.56-.78.02-.02.04-.06.06-.08.2-.24.42-.46.66-.68 1.92-1.82 4.52-3.3 3.98-7.12-.48-3.48-3.22-6.42-6.7-6.94z\" fill=\"inherit\"/></svg>",
	"highlight_off": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.94 4 4 12.94 4 24s8.94 20 20 20 20-8.94 20-20S35.06 4 24 4zm8.58 25.78c.78.78.78 2.04 0 2.82-.78.78-2.04.78-2.82 0L24 26.82l-5.78 5.78c-.78.78-2.04.78-2.82 0-.78-.78-.78-2.04 0-2.82L21.18 24l-5.76-5.78c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0L24 21.18l5.78-5.78c.78-.78 2.04-.78 2.82 0 .78.78.78 2.04 0 2.82L26.82 24l5.76 5.78z\" fill=\"inherit\"/></svg>",
	"hourglass_full": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M36 14V8h2c1.1 0 2-.9 2-2s-.9-2-2-2H10c-1.1 0-2 .9-2 2s.9 2 2 2h2v6c0 4.18 2.14 7.86 5.38 10A11.966 11.966 0 0012 34v6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h28c1.1 0 2-.9 2-2s-.9-2-2-2h-2v-6c0-4.18-2.14-7.86-5.38-10C33.86 21.86 36 18.18 36 14z\" fill=\"inherit\"/></svg>",
	"info": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 30c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2zm0-16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"lock": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M36 16h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM24 34c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm-6-18v-4c0-3.32 2.68-6 6-6s6 2.68 6 6v4H18z\" fill=\"inherit\"/></svg>",
	"lock_clock": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M36 22c1.4 0 2.74.2 4 .58V20c0-2.2-1.8-4-4-4h-2v-4c0-5.52-4.48-10-10-10S14 6.48 14 12v4h-2c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h12.52A13.926 13.926 0 0122 36c0-7.74 6.26-14 14-14zM18 12c0-3.32 2.68-6 6-6s6 2.68 6 6v4H18v-4z\" fill=\"inherit\"/><path d=\"M36 26c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm4 14c-.4.4-1.02.4-1.42 0l-3.3-3.3c-.18-.18-.3-.44-.3-.7v-5c0-.56.44-1 1-1s1 .44 1 1v4.58l3 3c.42.4.42 1.02.02 1.42z\" fill=\"inherit\"/></svg>",
	"lock_open": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M36 16h-2v-4c0-5.52-4.48-10-10-10-4.56 0-8.54 3.08-9.68 7.5-.28 1.08.36 2.16 1.44 2.44a2 2 0 002.44-1.44C18.88 7.86 21.26 6 24 6c3.3 0 6 2.7 6 6v4H12c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM24 34c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\" fill=\"inherit\"/></svg>",
	"note_add": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38.82 14.82l-9.66-9.66A3.996 3.996 0 0026.34 4H12C9.8 4 8.02 5.8 8.02 8L8 40c0 2.2 1.78 4 3.98 4H36c2.2 0 4-1.8 4-4V17.66c0-1.06-.42-2.08-1.18-2.84zM30 30h-4v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4h-4c-1.1 0-2-.9-2-2s.9-2 2-2h4v-4c0-1.1.9-2 2-2s2 .9 2 2v4h4c1.1 0 2 .9 2 2s-.9 2-2 2zm-4-16V7l11 11h-7c-2.2 0-4-1.8-4-4z\" fill=\"inherit\"/></svg>",
	"open_in_browser": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M38 6H10c-2.22 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h6c1.1 0 2-.9 2-2s-.9-2-2-2h-6V14h28v24h-6c-1.1 0-2 .9-2 2s.9 2 2 2h6c2.2 0 4-1.8 4-4V10c0-2.2-1.78-4-4-4zM23.3 22.7l-5.58 5.58c-.64.64-.2 1.72.7 1.72H22v10c0 1.1.9 2 2 2s2-.9 2-2V30h3.58c.9 0 1.34-1.08.7-1.7l-5.58-5.58a.984.984 0 00-1.4-.02z\" fill=\"inherit\"/></svg>",
	"open_in_full": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M42 17.18V8c0-1.1-.9-2-2-2h-9.18c-1.78 0-2.68 2.16-1.42 3.42l3.18 3.18-20 20-3.18-3.18c-1.24-1.26-3.4-.38-3.4 1.4V40c0 1.1.9 2 2 2h9.18c1.78 0 2.68-2.16 1.42-3.42l-3.18-3.18 20-20 3.18 3.18c1.24 1.26 3.4.38 3.4-1.4z\" fill=\"inherit\"/></svg>",
	"open_in_new": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40 24c-1.1 0-2 .9-2 2v12H10V10h12c1.1 0 2-.9 2-2s-.9-2-2-2H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V26c0-1.1-.9-2-2-2z\" fill=\"inherit\"/><path d=\"M41 6H30.42c-.9 0-1.34 1.08-.7 1.7l3.88 3.88L18 27.18c-.78.78-.78 2.04 0 2.82.78.78 2.04.78 2.82 0L36.4 14.42l3.88 3.88c.64.62 1.72.18 1.72-.72V7c0-.56-.44-1-1-1z\" fill=\"inherit\"/></svg>",
	"open_in_new_off": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M33.58 11.6L29.7 7.72c-.62-.64-.18-1.72.72-1.72H41c.56 0 1 .44 1 1v10.58c0 .9-1.08 1.34-1.7.7l-3.88-3.88-8.18 8.18-2.82-2.82 8.16-8.16zM38 26v6.34l4 4V26c0-1.1-.9-2-2-2s-2 .9-2 2zm.14 17.8l-1.8-1.8H10c-2.22 0-4-1.8-4-4V11.66l-1.8-1.8c-.78-.78-.78-2.04 0-2.82.78-.78 2.04-.78 2.82 0l33.94 33.94c.78.78.78 2.04 0 2.82-.78.78-2.04.78-2.82 0zm-5.8-5.8l-9.76-9.76L20.82 30c-.78.78-2.04.78-2.82 0-.78-.78-.78-2.04 0-2.82l1.76-1.76L10 15.66V38h22.34zM15.66 10H22c1.1 0 2-.9 2-2s-.9-2-2-2H11.66l4 4z\" fill=\"inherit\"/></svg>",
	"power_settings_new": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2zm10.28 5.72c-.78.78-.76 2-.02 2.78 2.26 2.4 3.66 5.6 3.74 9.14.18 7.66-6.16 14.26-13.82 14.34C16.36 38.1 10 31.8 10 24c0-3.68 1.42-7.02 3.74-9.52.74-.78.74-2-.02-2.76-.8-.8-2.1-.78-2.86.04-2.9 3.08-4.72 7.18-4.86 11.72-.28 9.76 7.66 18.2 17.42 18.5 10.2.32 18.58-7.86 18.58-18 0-4.74-1.84-9.02-4.84-12.22-.76-.82-2.08-.84-2.88-.04z\" fill=\"inherit\"/></svg>",
	"report_problem": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M5.46 42h37.06c1.54 0 2.5-1.66 1.74-3L25.72 7c-.78-1.34-2.7-1.34-3.46 0L3.72 39c-.76 1.34.2 3 1.74 3zM24 30c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2zm2 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z\" fill=\"inherit\"/></svg>",
	"room": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 4C15.6 4 8 10.44 8 20.4c0 6.36 4.9 13.84 14.68 22.46.76.66 1.9.66 2.66 0C35.1 34.24 40 26.76 40 20.4 40 10.44 32.4 4 24 4zm0 20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\" fill=\"inherit\"/></svg>",
	"search": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40.58 37.76L29.46 26.64c2.26-3.1 3.26-7.16 1.96-11.48-1.36-4.46-5.14-7.96-9.7-8.88A13.023 13.023 0 006.28 21.72c.92 4.58 4.42 8.36 8.88 9.7 4.32 1.3 8.38.3 11.48-1.96l11.12 11.12c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82zM10 19c0-4.98 4.02-9 9-9s9 4.02 9 9-4.02 9-9 9-9-4.02-9-9z\" fill=\"inherit\"/></svg>",
	"settings": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.246 25.872c.072-.6.12-1.224.12-1.872 0-.648-.048-1.272-.144-1.872l4.056-3.168c.36-.288.456-.816.24-1.224l-3.84-6.648c-.24-.432-.744-.576-1.176-.432l-4.776 1.92a14.061 14.061 0 00-3.24-1.872l-.72-5.088a.958.958 0 00-.96-.816h-7.68a.934.934 0 00-.936.816l-.72 5.088a14.437 14.437 0 00-3.24 1.872l-4.776-1.92a.95.95 0 00-1.176.432l-3.84 6.648c-.24.432-.144.936.24 1.224l4.056 3.168c-.096.6-.168 1.248-.168 1.872 0 .624.048 1.272.144 1.872L5.654 29.04c-.36.288-.456.816-.24 1.224l3.84 6.648c.24.432.744.576 1.176.432l4.776-1.92a14.061 14.061 0 003.24 1.872l.72 5.088c.096.48.48.816.96.816h7.68c.48 0 .888-.336.936-.816l.72-5.088a14.437 14.437 0 003.24-1.872l4.776 1.92a.95.95 0 001.176-.432l3.84-6.648c.24-.432.144-.936-.24-1.224l-4.008-3.168zM23.966 31.2c-3.96 0-7.2-3.24-7.2-7.2s3.24-7.2 7.2-7.2 7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2z\" fill=\"inherit\" fill-opacity=\".87\"/></svg>",
	"settings_applications": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 28a4 4 0 100-8 4 4 0 000 8z\" fill=\"inherit\"/><path d=\"M38 6H10c-2.22 0-4 1.8-4 4v28c0 2.2 1.78 4 4 4h28c2.22 0 4-1.8 4-4V10c0-2.2-1.78-4-4-4zm-6.5 18c0 .44-.06.84-.12 1.26l1.68 1.46c.36.32.44.84.2 1.26l-1.18 2.04c-.24.42-.74.6-1.18.44l-2.12-.72c-.64.54-1.36.96-2.16 1.26l-.44 2.18c-.1.46-.5.8-.98.8h-2.36c-.48 0-.88-.34-.98-.8L21.42 31c-.8-.3-1.52-.72-2.16-1.26l-2.12.72a.992.992 0 01-1.18-.44l-1.18-2.04c-.24-.42-.16-.94.2-1.26l1.68-1.46c-.1-.42-.16-.82-.16-1.26 0-.44.06-.84.12-1.26l-1.68-1.46c-.36-.32-.44-.84-.2-1.26l1.18-2.04c.24-.42.74-.6 1.18-.44l2.12.72c.64-.54 1.36-.96 2.16-1.26l.44-2.18c.12-.48.52-.82 1-.82h2.36c.48 0 .88.34.98.8l.44 2.18c.8.3 1.52.72 2.16 1.26l2.12-.72c.46-.16.94.04 1.18.44L33.24 20c.24.42.16.94-.2 1.26l-1.68 1.46c.08.44.14.84.14 1.28z\" fill=\"inherit\"/></svg>",
	"speaker_notes": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M40 4H8C5.8 4 4.02 5.8 4.02 8L4 39.16c0 1.78 2.16 2.68 3.42 1.42L12 36h28c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM14 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm14 12h-6c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2zm6-6H22c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2zm0-6H22c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2z\" fill=\"inherit\"/></svg>",
	"speaker_notes_off": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M5.48 5.62c-.76-.76-1.98-.76-2.74 0-.76.76-.76 1.98 0 2.74l1.28 1.28L4 39.12c0 1.78 2.16 2.68 3.42 1.42L12 35.96h18.34l9.22 9.22c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L5.48 5.62zM12.8 18.4l2.76 2.76c-.36.46-.92.8-1.56.8-1.1 0-2-.9-2-2 0-.64.32-1.18.8-1.56zm1.2 9.56c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM40 4H9.66L20.1 14.44c-.04-.16-.1-.28-.1-.44 0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2H22c-.16 0-.28-.06-.44-.08l2.1 2.08H34c1.1 0 2 .9 2 2s-.9 2-2 2h-6.34L41.4 35.74C42.9 35.16 44 33.7 44 32V8c0-2.2-1.8-4-4-4z\" fill=\"inherit\"/></svg>",
	"thumb_down": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M21.76 43.88L32.82 32.8c.74-.74 1.16-1.76 1.16-2.82V10c0-2.2-1.8-4-4-4H12c-1.6 0-3.04.96-3.66 2.42L1.82 23.64C.12 27.6 3.02 32 7.32 32h11.3l-1.9 9.16c-.2 1 .1 2.02.82 2.74a2.976 2.976 0 004.22-.02zM42 6c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4s4-1.8 4-4V10c0-2.2-1.8-4-4-4z\" fill=\"inherit\"/></svg>",
	"thumb_up": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M26.24 4.12L15.16 15.2c-.74.74-1.16 1.76-1.16 2.82V38c0 2.2 1.8 4 4 4h18c1.6 0 3.04-.96 3.68-2.42l6.52-15.22C47.88 20.4 44.98 16 40.68 16h-11.3l1.9-9.16c.2-1-.1-2.02-.82-2.74a2.976 2.976 0 00-4.22.02zM6 42c2.2 0 4-1.8 4-4V22c0-2.2-1.8-4-4-4s-4 1.8-4 4v16c0 2.2 1.8 4 4 4z\" fill=\"inherit\"/></svg>",
	"touch_app": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M18 18.48V11c0-2.76 2.24-5 5-5s5 2.24 5 5v7.48c2.42-1.62 4-4.36 4-7.48 0-4.98-4.02-9-9-9s-9 4.02-9 9c0 3.12 1.58 5.86 4 7.48z\" fill=\"inherit\"/><path d=\"M29 23.42c-.56-.28-1.16-.42-1.78-.42H26V11c0-1.66-1.34-3-3-3s-3 1.34-3 3v21.48l-6.88-1.44c-.74-.16-1.52.08-2.06.62-.86.88-.86 2.28.02 3.16l8.02 8.02c.74.74 1.76 1.16 2.82 1.16h12.82c2 0 3.68-1.46 3.96-3.44l1.26-8.92c.24-1.7-.64-3.38-2.18-4.14L29 23.42z\" fill=\"inherit\"/></svg>",
	"tour": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M39.04 8H14V6c0-1.1-.9-2-2-2s-2 .9-2 2v38h4V28h25.04c1.42 0 2.38-1.42 1.86-2.74L38 18l2.9-7.26C41.42 9.42 40.46 8 39.04 8zM25 22c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\" fill=\"inherit\"/></svg>",
	"visibility": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 8C14 8 5.46 14.22 2 23c3.46 8.78 12 15 22 15s18.54-6.22 22-15C42.54 14.22 34 8 24 8zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.32 0-6 2.68-6 6s2.68 6 6 6 6-2.68 6-6-2.68-6-6-6z\" fill=\"inherit\"/></svg>",
	"visibility_off": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M24 13c5.52 0 10 4.48 10 10 0 1.02-.2 2-.48 2.92l6.12 6.12c2.78-2.46 4.98-5.54 6.36-9.06C42.54 14.22 34 8 24 8c-2.54 0-4.98.4-7.28 1.14l4.34 4.34C22 13.2 22.98 13 24 13zM5.42 6.32c-.78.78-.78 2.04 0 2.82l3.94 3.94C6.12 15.66 3.54 19.06 2 23c3.46 8.78 12 15 22 15 3.04 0 5.94-.6 8.62-1.64l5.44 5.44c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L8.26 6.32c-.78-.78-2.06-.78-2.84 0zM24 33c-5.52 0-10-4.48-10-10 0-1.54.36-3 .98-4.28l3.14 3.14c-.06.36-.12.74-.12 1.14 0 3.32 2.68 6 6 6 .4 0 .76-.06 1.14-.14L28.28 32c-1.3.64-2.74 1-4.28 1zm5.94-10.66c-.3-2.8-2.5-4.98-5.28-5.28l5.28 5.28z\" fill=\"inherit\"/></svg>",
	"zoom_in": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M23 17h-2v-2c0-1.1-.9-2-2-2s-2 .9-2 2v2h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v2c0 1.1.9 2 2 2s2-.9 2-2v-2h2c1.1 0 2-.9 2-2s-.9-2-2-2z\" fill=\"inherit\"/><path d=\"M29.46 26.62c2.26-3.1 3.26-7.16 1.96-11.48-1.36-4.46-5.14-7.96-9.7-8.88A13.042 13.042 0 006.28 21.72c.92 4.58 4.42 8.36 8.88 9.7 4.32 1.3 8.38.3 11.48-1.96l11.12 11.12c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L29.46 26.62zM19 28c-4.98 0-9-4.02-9-9s4.02-9 9-9 9 4.02 9 9-4.02 9-9 9z\" fill=\"inherit\"/></svg>",
	"zoom_out": "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><path d=\"M22 17h-6c-1.1 0-2 .9-2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s-.9-2-2-2z\" fill=\"inherit\"/><path d=\"M29.46 26.62c2.26-3.1 3.26-7.16 1.96-11.48-1.36-4.46-5.14-7.96-9.7-8.88A13.042 13.042 0 006.28 21.72c.92 4.58 4.42 8.36 8.88 9.7 4.32 1.3 8.38.3 11.48-1.96l11.12 11.12c.78.78 2.04.78 2.82 0 .78-.78.78-2.04 0-2.82L29.46 26.62zM19 28c-4.98 0-9-4.02-9-9s4.02-9 9-9 9 4.02 9 9-4.02 9-9 9z\" fill=\"inherit\"/></svg>"
};
export default icons;
