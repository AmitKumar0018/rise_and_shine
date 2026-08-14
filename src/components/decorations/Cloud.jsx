export default function Cloud({
  className = "",
  color = "#FFFFFF",
  opacity = 0.5,
}) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M26 48C13 48 5 40 5 29C5 18 14 10 25 10C28 10 31 11 34 12C39 4 47 0 57 0C71 0 82 9 84 22C86 21 89 20 92 20C104 20 113 29 113 40C113 45 111 48 108 50H26V48Z"
        fill={color}
      />
    </svg>
  );
}