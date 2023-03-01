package com.preproject.myoverflow.member;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member MemberPostToMember(MemberDto.Post memberPost);

    Member MemberPatchToMember(MemberDto.Patch memberPatch);

    MemberDto.Response MemberToMemberResponseDto(Member member);
//    List<QuestionDto.Response> questionsToResponses(List<Question> questions);
}

