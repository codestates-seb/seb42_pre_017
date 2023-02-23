package com.preproject.myoverflow.answer.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPatchDto {
    private long answerId;

    @NotBlank(message = "답변을 작성해 주세요")
    private String content;
}
