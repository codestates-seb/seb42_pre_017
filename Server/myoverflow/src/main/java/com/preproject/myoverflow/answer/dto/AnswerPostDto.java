package com.preproject.myoverflow.answer.dto;

import javax.validation.constraints.NotBlank;

public class AnswerPostDto {
    @NotBlank(message = "답변을 작성해 주세요")
    private String content;
    private long answerId;
    private long questionId;











    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }



    public long getQuestionId() {
        return questionId;
    }


    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(long answerId) {
        this.answerId = answerId;
    }
}
