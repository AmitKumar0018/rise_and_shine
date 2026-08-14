export default function Balloon({ color = "#FF7A7A", size = 50 }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 60 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="30"
        cy="25"
        rx="20"
        ry="23"
        fill={color}
      />

      <path
        d="M27 47L30 52L33 47"
        fill={color}
      />

      <path
        d="M30 52C28 60 32 66 30 74"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}