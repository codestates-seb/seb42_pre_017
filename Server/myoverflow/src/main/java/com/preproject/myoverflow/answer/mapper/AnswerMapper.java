package com.preproject.myoverflow.answer.mapper;

import com.preproject.myoverflow.answer.dto.AnswerPatchDto;
import com.preproject.myoverflow.answer.dto.AnswerPostDto;
import com.preproject.myoverflow.answer.dto.AnswerResponseDto;
import com.preproject.myoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);



}
