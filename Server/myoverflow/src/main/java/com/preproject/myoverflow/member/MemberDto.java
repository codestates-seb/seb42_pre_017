package com.preproject.myoverflow.member;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;


public class MemberDto {

    @Getter
    public static class Post{
        @NotBlank
        private String email;

        @NotBlank
        private String name;

        @NotBlank
        private String nickname;

        @Positive
        private long memberId;
    }

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
}
