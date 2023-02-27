package com.preproject.myoverflow.member;

import com.preproject.myoverflow.auth.utils.CustomAuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
//Todo : @Transational 적용
public class MemberService {
    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils customAuthorityUtils){
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = customAuthorityUtils;
        this.memberRepository = memberRepository;
    }


    public Member createMember(Member member){
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

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