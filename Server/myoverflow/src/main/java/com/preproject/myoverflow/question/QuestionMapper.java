package com.preproject.myoverflow.question;

import com.preproject.myoverflow.member.Member;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionDto.Post post){
        Question question = new Question();
        Member member = new Member();

        member.setMemberId(post.getMemberId());

        question.setCategory(post.getCategory());
        question.setTitle(post.getTitle());
        question.setContent(post.getContent());
        question.setMember(member);

        return question;
    }

    Question questionPatchDtoToQuestion(QuestionDto.Patch patch);
    @Mapping(source = "questionAnswerStatus.status", target = "questionAnswerStatus")
    @Mapping(source = "questionOpenStatus.status", target = "questionOpenStatus")
    @Mapping(source = "member.memberId",  target = "memberId")
    @Mapping(source = "member.nickname",  target = "nickname")
    QuestionDto.Response questionToResponseDto(Question question);
    List<QuestionDto.Response> questionsToResponseDtos(List<Question> questions);
}
