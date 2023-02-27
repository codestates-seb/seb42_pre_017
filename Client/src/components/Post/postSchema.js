import { z as zod } from "zod";

export const postSchema = zod.object({
  title: zod.string().min(1, { message: "질문 제목은 필수 입력사항이에요" }),
  content: zod.string().min(1, { message: "질문 내용은 필수 입력사항이에요" }),
});
