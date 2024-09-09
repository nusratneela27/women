"use client";

import { FlashSaleCountdownProps } from "@/types";
import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <span>Flash sale has ended!</span>;
  } else {
    return (
      <div className="flex space-x-2 text-lg font-semibold">
        <div className="p-2 bg-gray-200 rounded">{days}d</div>
        <div className="p-2 bg-gray-200 rounded">{hours}h</div>
        <div className="p-2 bg-gray-200 rounded">{minutes}m</div>
        <div className="p-2 bg-gray-200 rounded">{seconds}s</div>
      </div>
    );
  }
};

const FlashSaleCountdown = ({ endDate }: FlashSaleCountdownProps) => {
  return <Countdown date={endDate} renderer={CountdownRenderer} />;
};

export default FlashSaleCountdown;
