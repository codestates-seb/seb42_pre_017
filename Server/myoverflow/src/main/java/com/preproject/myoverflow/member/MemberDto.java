package com.preproject.myoverflow.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDateTime;


public class MemberDto {

    @Getter
    public static class Post{
        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String name;

        @NotBlank
        private String nickname;
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

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private long memberId;
        private String email;
        private String name;
        private String nickname;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}