package com.preproject.myoverflow.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPostDto {
    @NotBlank(message = "답변을 작성해 주세요")
    private String content;
    @Positive
    private long memberId;

    @Positive(message = "답변의 질문 없음")
    private long questionId;
}
