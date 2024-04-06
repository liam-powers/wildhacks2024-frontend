"use client";

export default function Button(props) {
  return (
    <button className="bg-[#6A7FC3] bg-opacity-70">
      {props.text}
    </button>
  );
}