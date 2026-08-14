export default function Star({
  className = "",
  color = "#FFFFFF",
  opacity = 0.5,
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={color}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1.5L14.8 8.2L22 9L16.6 13.8L18.2 21L12 17.2L5.8 21L7.4 13.8L2 9L9.2 8.2L12 1.5Z" />
    </svg>
  );
}