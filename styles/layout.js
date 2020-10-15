import css from "styled-jsx/css";

export default css.global`
  // https://github.com/xz/new.css/blob/master/new.css
  :root {
    --nc-font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --nc-font-mono: Consolas, monaco, "Ubuntu Mono", "Liberation Mono",
      "Courier New", Courier, monospace;

    --nc-tx-1: #000000;
    --nc-tx-2: #1a1a1a;
    --nc-bg-1: #ffffff;
    --nc-bg-2: #f6f8fa;
    --nc-bg-3: #e5e7eb;
    --nc-lk-1: #0070f3;
    --nc-lk-2: #0366d6;
    --nc-lk-tx: #ffffff;
    --nc-ac-1: #79ffe1;
    --nc-ac-tx: #0c4047;
  }

  html,
  input,
  select,
  button {
    /* Set body font family and some finicky elements */
    font-family: var(--nc-font-sans);
  }

  blockquote {
    padding: 1.5rem;
    background: var(--nc-bg-2);
    border-left: 5px solid var(--nc-bg-3);
  }

  table {
    /* border-collapse sets the table's elements to share borders, rather than floating as separate "boxes". */
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid var(--nc-bg-3);
    text-align: left;
    padding: 0.5rem;
  }

  th {
    background: var(--nc-bg-2);
  }

  tr:nth-child(even) {
    /* Set every other cell slightly darker. Improves readability. */
    background: var(--nc-bg-2);
  }

  table caption {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 100%;
  }
`;
