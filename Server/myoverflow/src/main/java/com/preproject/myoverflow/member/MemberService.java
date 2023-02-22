package com.preproject.myoverflow.member;

import org.springframework.stereotype.Service;

@Service
//Todo : @Transational 적용
public class MemberService {
    private final MemberRepository repository;

    public MemberService(MemberRepository repository){
        this.repository = repository;
    }


    public Member createMember(Member member){
        Member createdMember = repository.save(member);
        return createdMember;
    }
}
