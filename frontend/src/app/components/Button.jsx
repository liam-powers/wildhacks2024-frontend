"use client";

export default function Button(props) {
  return (
    <button className="bg-[#6A7FC3] bg-opacity-70 rounded-xl">
      <div className="text-4xl p-4">{props.text}</div>
    </button>
  );
}