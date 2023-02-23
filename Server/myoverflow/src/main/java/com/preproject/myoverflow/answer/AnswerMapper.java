package com.preproject.myoverflow.answer;

import com.preproject.myoverflow.answer.AnswerDto;
import com.preproject.myoverflow.answer.Answer;
import com.preproject.myoverflow.question.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto){
        Answer answer = new Answer();
        Question question = new Question();

        answer.setContent(answerPostDto.getContent());

        question.setQuestionId(answerPostDto.getQuestionId());
        answer.setQuestion(question);

        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    @Mapping(source = "answerOpenStatus.status",  target = "answerOpenStatus")
    AnswerDto.Response answerToAnswerResponseDto(Answer answer);

    List<AnswerDto.Response> answerListToAnswerResponseDtos(List<Answer> answers);
}
