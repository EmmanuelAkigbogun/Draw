import { useContext, useEffect, useState } from "react";
import { Context } from "./BarChart";
import { hover } from "./Functions/Hover";
import { setupfx } from "./Functions/Setup";
import { tryhover } from "./Functions/Hover";
function Svg() {
  let context = useContext(Context);
  let ctx = context.ctx;
  let render = context.render;
  let vgRoundRect = context.vgRoundRect;
  let vgtextx = context.vgtextx;
  let vgtexty = context.vgtexty;
  let fontguy = context.fontguy;
  let dashx = context.dashx;
  let dashy = context.dashy;
  let vglinex = context.vglinex;
  let vgliney = context.vgliney;
  let vgchattri = context.vgchattri;
  let vgchatrec = context.vgchatrec;
  let vgchattxt = context.vgchattxt;
  let shadowx = context.shadowx;
  let shadowy  = context.shadowy;
  let lowest = context.lowest;
  let difference = context.difference;
  let constantscaley = context.constantscaley;
  return (
    <>
      <svg
        onClick={() => {
          hover("click", "click", context);
        }}
        className="canvas"
        onDoubleClick={(e) => {
          lowest.current == 0 ? (lowest.current = -100) : (lowest.current = 0);
          constantscaley.current == 2.3
            ? (constantscaley.current = 1.15)
            : (constantscaley.current = 2.3);
          difference.current == 100
            ? (difference.current = 200)
            : (difference.current = 100);
          setupfx(context);
          tryhover(context);
        }}
        viewBox={`0 0 ${render[0]} ${render[1]}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.keys(vgRoundRect.current).map((e, index) => {
          return (
            <foreignObject
              x={
                vgRoundRect.current[e][0] +
                (+vgRoundRect.current[e][2] < 0 ? vgRoundRect.current[e][2] : 0)
              }
              y={
                vgRoundRect.current[e][1] +
                (+vgRoundRect.current[e][3] < 0 ? vgRoundRect.current[e][3] : 0)
              }
              width={Math.abs(vgRoundRect.current[e][2])}
              height={Math.abs(vgRoundRect.current[e][3])}
              key={e + 1}
              style={{
                background: vgRoundRect.current[e][8],
                borderRadius:
                  +vgRoundRect.current[e][3] < 0
                    ? `${vgRoundRect.current[e][7]}px ${vgRoundRect.current[e][6]}px ${vgRoundRect.current[e][5]}px ${vgRoundRect.current[e][4]}px`
                    : `${vgRoundRect.current[e][4]}px ${vgRoundRect.current[e][5]}px ${vgRoundRect.current[e][6]}px ${vgRoundRect.current[e][7]}px`,
              }}
            ></foreignObject>
          );
        })}
        {
          <>
            <path
              d={`M${vgchattri.current[0]} ${vgchattri.current[1]} L${vgchattri.current[2]} ${vgchattri.current[3]} L${vgchattri.current[4]} ${vgchattri.current[5]} L${vgchattri.current[6]} ${vgchattri.current[7]} z`}
              fill="black"
            />
            <rect
              x={
                vgchatrec.current[0] +
                (+vgchatrec.current[2] < 0 ? vgchatrec.current[2] : 0)
              }
              y={
                vgchatrec.current[1] +
                (+vgchatrec.current[3] < 0 ? vgchatrec.current[3] : 0)
              }
              width={Math.abs(vgchatrec.current[2])}
              height={Math.abs(vgchatrec.current[3])}
              rx={vgchatrec.current[4]}
              fill="black"
            />
            <text
              x={vgchattxt.current[1]}
              y={vgchattxt.current[2]}
              fontSize={+fontguy.current}
              fontFamily="sans-serif"
              letterSpacing="1"
              fill="white"
            >
              {vgchattxt.current[0]}
            </text>
          </>
        }
        {Object.keys(vgtextx.current).map((e) => {
          return (
            <text
              key={e}
              x={vgtextx.current[e][1] + vgtextx.current[e][3]}
              y={vgtextx.current[e][2] + vgtextx.current[e][4]}
              transform={`rotate(0 ${
                vgtextx.current[e][1] + vgtextx.current[e][3]
              },${vgtextx.current[e][2] + vgtextx.current[e][2]})`}
              fontSize={+fontguy.current}
              fontFamily="sans-serif"
              letterSpacing="1"
              fill="rgb(158,158,158)"
            >
              {vgtextx.current[e][0]}
            </text>
          );
        })}
        {Object.keys(vgtexty.current).map((e) => {
          return (
            <text
              key={e}
              x={vgtexty.current[e][1]}
              y={vgtexty.current[e][2]}
              fontSize={+fontguy.current}
              fontFamily="sans-serif"
              letterSpacing="1"
              fill="rgb(158,158,158)"
            >
              {vgtexty.current[e][0]}
            </text>
          );
        })}
        {Object.keys(vglinex.current).map((e) => {
          return (
            <path
              key={e}
              d={`M${vglinex.current[e][0]} ${vglinex.current[e][1]} L${vglinex.current[e][2]} ${vglinex.current[e][3]} z`}
              stroke={vglinex.current[e][4]}
              strokeWidth={vglinex.current[e][5]}
              strokeDasharray={`${dashx.current}`}
            />
          );
        })}
        {Object.keys(vgliney.current).map((e) => {
          return (
            <path
              key={e}
              d={`M${vgliney.current[e][0]} ${vgliney.current[e][1]} L${vgliney.current[e][2]} ${vgliney.current[e][3]} z`}
              stroke={vgliney.current[e][4]}
              strokeWidth={vgliney.current[e][5]}
              strokeDasharray={`${dashy.current}`}
            />
          );
        })}
      </svg>
    </>
  );
}
export default Svg;
