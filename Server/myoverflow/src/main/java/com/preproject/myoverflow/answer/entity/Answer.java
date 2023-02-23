package com.preproject.myoverflow.answer.entity;

import com.preproject.myoverflow.member.Member;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

public class Answer {
    private long answerId;
    private String content;
    private String creator;
    private int quantity;

    public void addMember(Member member) {
        this.member = member;
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}



