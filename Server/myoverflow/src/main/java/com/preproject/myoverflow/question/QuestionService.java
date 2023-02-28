package com.preproject.myoverflow.question;

import com.preproject.myoverflow.exception.BusinessLogicException;
import com.preproject.myoverflow.exception.ExceptionCode;
import com.preproject.myoverflow.member.Member;
import com.preproject.myoverflow.member.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
//Todo : @Transational 적용
public class QuestionService {
    private final QuestionRepository repository;

    private final MemberService memberService;

    public QuestionService(QuestionRepository repository,
                           MemberService memberService){
        this.memberService = memberService;
        this.repository = repository;
    }


    public Question createQuestion(Question question){
        memberService.findVerifiedMember(question.getMember().getMemberId());
        Question createdQuestion = repository.save(question);
        return createdQuestion;
    }

    public Question updateQuestion(Question question){

        Question foundQuestion = findVerifiedQuestion(question.getQuestionId(), question.getMember().getMemberId());

        Optional.ofNullable(question.getTitle()).ifPresent(title -> foundQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> foundQuestion.setContent(content));
        Optional.ofNullable(question.getCategory()).ifPresent(stack -> foundQuestion.setCategory(stack));
        Optional.ofNullable(question.getQuestionAnswerStatus()).ifPresent(questionStatus -> foundQuestion.setQuestionAnswerStatus(questionStatus));
        Optional.ofNullable(question.getQuestionOpenStatus()).ifPresent(questionOpenStatus -> foundQuestion.setQuestionOpenStatus(questionOpenStatus));
        foundQuestion.setModifiedAt(LocalDateTime.now());

        return repository.save(foundQuestion);
    }

    public Question getQuestion(long questionId){
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> getQuestions(int page, int size){
        return repository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public Page<Question> getQuestions(List<String> category, int page, int size){
        return repository.findByCategory(category, PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public void deleteQuestion(long questionId){
        repository.delete(findVerifiedQuestion(questionId));
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = repository.findById(questionId);
        Question foundQuestion =
                optionalQuestion
                        .orElse(null);
//                        .orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return foundQuestion;
    }

    private Question findVerifiedQuestion(long questionId, long memberId){
        Question foundQuestion = findVerifiedQuestion(questionId);
        if(foundQuestion.getMember().getMemberId() != memberId)
            new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        return foundQuestion;
    }


}
