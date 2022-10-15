import React from "react";

const Loading = (props) => {
  const {
    styles = {},
    begin = "0s",
    speed = "0.3s",
    width = "100%",
    height = "100%",
    repeatCount = "indefinite",
    startAt,
  } = props;
  const isHoriz = startAt === "top" || startAt === "bottom";
  const from = startAt === "left" || startAt === "top" ? 0 : 1;
  const to = from === 1 ? 0 : 1;
  const attName = isHoriz ? "dy" : "dx";
  const fill = styles.fill
    ? styles.fill
    : startAt === "left" || startAt === "top"
    ? "#fff"
    : "#000";
  const flood = styles.flood ? styles.flood : fill === "#fff" ? "#000" : "#fff";
  const stroke = styles.stroke ? styles.stroke : "none";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <defs>
        <filter
          id="fullFill"
          primitiveUnits="objectBoundingBox"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
        >
          <feFlood
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            floodColor={flood}
          />
          <feOffset>
            <animate
              begin={begin}
              attributeName={attName}
              from={from}
              to={to}
              dur={speed}
              repeatCount={repeatCount}
            />
          </feOffset>
          <feComposite operator="in" in2="SourceGraphic" />
          <feComposite operator="over" in2="SourceGraphic" />
        </filter>
      </defs>
      <g fill={fill} filter={`url(#fullFill)`} stroke={stroke}>
        {props.children}
      </g>
    </svg>
  );
};

export default Loading;
