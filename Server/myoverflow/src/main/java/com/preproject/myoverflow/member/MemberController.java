package com.preproject.myoverflow.member;


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
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    //@Autowired
    private final MemberService service;
    private final MemberMapper mapper;

    public MemberController(MemberMapper mapper, MemberService service){
        this.service = service;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody MemberDto.Post requestBody){

        Member member = mapper.MemberPostToMember(requestBody);

        Member createdMember = service.createMember(member);

        return new ResponseEntity<>(createdMember, HttpStatus.CREATED);


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
