package com.preproject.myoverflow.member;

import org.springframework.stereotype.Service;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.Optional;

@Service
//Todo : @Transational 적용
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }


    public Member createMember(Member member){
        Member createdMember = memberRepository.save(member);
        return createdMember;
    }

    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }



//    public Member updateMember(Member member){
//        Member updateMember = repository.save(member);
//        return updateMember;
//    }

    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(()->null);
        return findMember;
    }


}
