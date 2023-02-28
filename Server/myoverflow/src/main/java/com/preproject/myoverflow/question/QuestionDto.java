package com.preproject.myoverflow.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    public static class Post{
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야함")
        private String content;

        @NotBlank
        private List<String> category;

        @Positive
        private long memberId;
    }
@Getter
@Setter
    public static class Patch{

        private long questionId;
        //null or 유의미한 값만 받기
        private String title;

        //null or 유의미한 값만 받기
        private String content;

        //null or 유의미한 값만 받기
        private List<String> category;

        @Positive
        private long memberId;
    }

    @AllArgsConstructor
    @Getter
    public static class Response{
        private String questionId;
        private String title;
        private String content;
        private List<String> category;
        private String questionAnswerStatus;
        private String questionOpenStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Long memberId;
        private String nickname;
        private int likeCount;
        private int answerCount;
    }
}
