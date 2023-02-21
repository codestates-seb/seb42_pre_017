package com.preproject.myoverflow.question;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post post);

    Question questionPatchDtoToQuestion(QuestionDto.Patch patch);
    @Mapping(source = "questionAnswerStatus.status", target = "questionAnswerStatus")
    @Mapping(source = "questionOpenStatus.status", target = "questionOpenStatus")
    QuestionDto.Response questionToResponseDto(Question question);
    List<QuestionDto.Response> questionsToResponseDtos(List<Question> questions);
}
