"use client";

import { useState } from "react"

export default function Error({error, reset}) {
  useState(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className="pt-12 space-y-8 text-center">
      <h1 className="text-3xl">{error.message || "Something went wrong!"}</h1>
      <button className="text-blue-500" onClick={e => reset()}>Try again</button>
    </div>
  )
}
