package com.preproject.myoverflow.question;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    Question questionPostToQuestion(QuestionDto.Post post);
    Question questionPatchToQuestion(QuestionDto.Patch patch);
//    List<QuestionDto.Response> questionsToResponses(List<Question> questions);
}
