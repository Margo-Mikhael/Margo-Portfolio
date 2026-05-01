export function AbdulRehmanMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 44 28"
      shapeRendering="crispEdges"
      {...props}
    >
      <path
        fill="currentColor"
        d="
            M0 0h4v28H0V0Z
            M16 0h4v28h-4V0Z
            M4 4h4v4H4V4Z
            M12 4h4v4h-4V4Z
            M8 8h4v8H8V8Z
            M24 0h4v28h-4V0Z
            M40 0h4v28h-4V0Z
            M28 4h4v4h-4V4Z
            M36 4h4v4h-4V4Z
            M32 8h4v8h-4V8Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 28" shape-rendering="crispEdges"><path fill="${color}" d="M0 0h4v28H0V0ZM16 0h4v28h-4V0ZM4 4h4v4H4V4ZM12 4h4v4h-4V4ZM8 8h4v8H8V8ZM24 0h4v28h-4V0ZM40 0h4v28h-4V0ZM28 4h4v4h-4V4ZM36 4h4v4h-4V4ZM32 8h4v8h-4V8Z"/></svg>`;
}
