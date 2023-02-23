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
    private final MemberService memberservice;
    private final MemberMapper mapper;

    public MemberController(MemberMapper mapper, MemberService memberservice){
        this.memberservice = memberservice;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPost){

        Member member = mapper.MemberPostToMember(memberPost);

        Member createdMember = memberservice.createMember(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(createdMember), HttpStatus.CREATED);


//        URI location = UriComponentsBuilder
//                .newInstance()
//                .path(QUESTION_DEFAULT_URL + "/{question-id}")
//                .buildAndExpand(createdQuestion.getQuestionId())
//                .toUri();
//        return ResponseEntity.created(location).build();
    }
//
//    @PatchMapping("{member-id}")
//    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
//                                        @Valid @RequestBody MemberDto.Patch memberPatch){
//        memberPatch.setMemberId(memberId);
//        Member member = mapper.MemberPatchToMember(memberPatch);
//        Member updatedMember = service.updateMember(member);
//        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updatedMember), HttpStatus.OK);
//    }
//
    @GetMapping("{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member response = memberservice.findMember(memberId);
        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(response), HttpStatus.OK);
    }
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
