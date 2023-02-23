package com.preproject.myoverflow.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;


public class MemberDto {

    @Getter
    public static class Post {
        @NotBlank
        private String email;

        @NotBlank
        private String name;

        @NotBlank
        private String nickname;

        @Positive
        private long memberId;
    }
        @Setter
    public static class Patch{
        @NotEmpty
        private String email;

        @NotEmpty
        private String name;

        @NotNull
        private String nickname;

        @Positive
        private long memberId;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private long memberId;
        private String email;
        private String name;
        private String nickname;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
