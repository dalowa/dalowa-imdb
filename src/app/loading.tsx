/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center">
      <img src="spinner.svg" alt="loading..." className="h-96" />
    </div>
  );
}
