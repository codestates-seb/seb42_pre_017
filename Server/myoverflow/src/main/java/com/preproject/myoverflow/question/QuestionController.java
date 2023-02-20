package com.preproject.myoverflow.question;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    //@Autowired
    private final QuestionService service;
    private final QuestionMapper mapper;

    public QuestionController(QuestionMapper mapper, QuestionService service){
        this.service = service;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody){

        Question question = mapper.questionPostToQuestion(requestBody);

        Question createdQuestion = service.createQuestion(question);

        return new ResponseEntity<>(createdQuestion, HttpStatus.CREATED);

//        URI location = UriComponentsBuilder
//                .newInstance()
//                .path(QUESTION_DEFAULT_URL + "/{question-id}")
//                .buildAndExpand(createdQuestion.getQuestionId())
//                .toUri();
//        return ResponseEntity.created(location).build();
    }
//
//    @PatchMapping("{question-id")
//    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
//                                        @Valid @RequestBody QuestionDto.Patch requestBody){
//
//    }
//
//    @GetMapping("{question-id}")
//    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
//
//    }
//
//    @GetMapping
//    public ResponseEntity getQuestions(){
//
//    }
//
//    @GetMapping("{stack}")//Todo 다중스택 가능??
//    public ResponseEntity getQuestionsByStack(@PathVariable("stack") String stack){
//
//    }
//
//    @DeleteMapping("{question-id}")
//    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
//
//    }

}
