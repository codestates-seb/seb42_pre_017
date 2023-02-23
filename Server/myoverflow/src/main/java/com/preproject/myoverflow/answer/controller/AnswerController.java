package com.preproject.myoverflow.answer.controller;



import com.preproject.myoverflow.answer.dto.AnswerPatchDto;
import com.preproject.myoverflow.answer.dto.AnswerPostDto;
import com.preproject.myoverflow.answer.entity.Answer;
import com.preproject.myoverflow.answer.mapper.AnswerMapper;
import com.preproject.myoverflow.answer.service.AnswerService;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);

        Answer response = answerService.createAnswer(answer);

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        answerPatchDto.setAnswerId(answerId);

        Answer response =
                answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity findAnswer(@Positive @PathVariable("answer-id")long answerId){
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answerService.findAnswer(answerId)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity findQuestionAnswers(@Positive @RequestParam long questionId){
        List<Answer> foundAnswers = answerService.findAllAnswers(questionId);
        return new ResponseEntity<>(mapper.answerListToAnswerResponseDtos(foundAnswers), HttpStatus.OK);
    }



    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive long answerId){
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
