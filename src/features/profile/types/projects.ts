export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /** Category label e.g. "React.js", "vanilla js", "Fullstack". */
  category?: string;
  /** Cover/thumbnail image (path under /public). */
  image?: string;
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Live demo URL. */
  demo?: string;
  /** Source code repository URL. */
  code?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
