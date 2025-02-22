"use client";
import { useSearchParams } from "next/navigation";

export const Post = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return <div>{id ?? "no id"}</div>;
};

export default Post;
