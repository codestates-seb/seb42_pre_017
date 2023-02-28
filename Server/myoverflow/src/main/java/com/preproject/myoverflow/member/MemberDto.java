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
        @Email //목요일 시간나면 이메일 인증 구현
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[₩~!@#$%^&*()_+,.<>/?:'])[A-Za-z\\d₩~!@#$%^&*()_+,.<>/?:']{8,}$")
        private String password;

        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){2,}$") //길이 : 2글자 이상
        private String nickname;
    }

    @Setter
    public static class Patch{
        //@NotSpace 구현
        //길이 : 2글자 이상
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){2,}$")
        private String nickname;

        //길디 : 8자리 이상, 특수문자 포함, 한글안됨
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[₩~!@#$%^&*()_+,.<>/?:'])[A-Za-z\\d₩~!@#$%^&*()_+,.<>/?:']{8,}$")
        private String password;

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
        private String nickname;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}