import React from "react";
import { Event } from "../types";

const hours = Array.from({ length: 15 }, (_, i) => 7 + i); // 7~21시

// 시간 문자열("09:30")을 분 단위로 변환
function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

const Daily: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <div
      style={{
        width: 320,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px #0001",
        padding: 12,
        margin: "0 auto",
        minHeight: 600,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h3 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
        Today's Schedule
      </h3>
      <div style={{ position: "relative" }}>
        {/* 시간 라벨 */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 40,
            zIndex: 1,
          }}
        >
          {hours.map((h) => (
            <div
              key={h}
              style={{
                height: 40,
                fontSize: 12,
                color: "#aaa",
                textAlign: "right",
                paddingRight: 4,
              }}
            >
              {h}:00
            </div>
          ))}
        </div>
        {/* 타임라인(세로선) */}
        <div style={{ marginLeft: 40, position: "relative" }}>
          {hours.map((h, i) => (
            <div
              key={h}
              style={{
                height: 40,
                borderBottom: "1px solid #eee",
                position: "relative",
              }}
            />
          ))}
          {/* 이벤트 블록 */}
          {events.map((ev, idx) => {
            const startMin = timeToMinutes(ev.start);
            const endMin = timeToMinutes(ev.end);
            const dayStart = 7 * 60;
            const top = ((startMin - dayStart) / 60) * 40;
            const height = ((endMin - startMin) / 60) * 40;
            return (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  left: 8,
                  right: 8,
                  top,
                  height,
                  background: ev.color,
                  borderRadius: 8,
                  boxShadow: "0 1px 4px #0001",
                  padding: "4px 8px",
                  fontSize: 14,
                  fontWeight: 500,
                  overflow: "hidden",
                  borderLeft: "4px solid #6366f1",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {ev.title}
                <span
                  style={{ marginLeft: "auto", fontSize: 12, color: "#888" }}
                >
                  {ev.start} - {ev.end}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Daily;
