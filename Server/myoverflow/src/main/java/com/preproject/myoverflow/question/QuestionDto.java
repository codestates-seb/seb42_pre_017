package com.preproject.myoverflow.question;

import lombok.Getter;

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

        @NotNull //"" 나 " "은 허용
        private List<String> stack;

        @Positive
        private long memberId;
    }

    public static class Patch{
        @NotEmpty(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotEmpty(message = "내용은 공백이 아니어야함")
        private String content;
        @NotNull //"" 나 " "은 허용
        private List<String> stack;

        @Positive
        private long memberId;
    }


    public static class Response{
        private String questionId;
        private String title;
        private String nickname;
        private LocalDateTime createdAt;
        private String stack;
        private String content;
        //private List<Answer> answers;
        private long like;
    }
}
