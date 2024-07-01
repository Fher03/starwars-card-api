"use client";
import { Audio, ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <ThreeDots color="#FFF" height={100} width={100} />;
    </div>
  );
}
