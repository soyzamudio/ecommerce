const Facebook = ({
  fill = "#3b5998",
  size = 22,
}: {
  fill?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 40 40"
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="-277.375"
        y1="406.6018"
        x2="-277.375"
        y2="407.5726"
        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
      >
        <stop
          offset="0"
          style={{
            stopColor: "#FFFFFF",
          }}
        />
      </linearGradient>
      <path
        fill={fill}
        d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z"
      />
      <path
        fill="#fff"
        d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z"
      />
    </svg>
  );
};

export default Facebook;
