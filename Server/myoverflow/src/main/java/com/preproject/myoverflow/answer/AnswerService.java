package com.preproject.myoverflow.answer;

import com.preproject.myoverflow.answer.Answer;
import com.preproject.myoverflow.answer.AnswerRepository;
import com.preproject.myoverflow.exception.BusinessLogicException;
import com.preproject.myoverflow.exception.ExceptionCode;
import com.preproject.myoverflow.member.Member;
import com.preproject.myoverflow.member.MemberService;
import com.preproject.myoverflow.question.Question;
import com.preproject.myoverflow.question.QuestionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.preproject.myoverflow.question.Question.QuestionAnswerStatus.QUESTION_ANSWERED;
import static com.preproject.myoverflow.question.Question.QuestionAnswerStatus.QUESTION_NOT_ANSWERED;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;

    private QuestionService questionService;

    private MemberService memberService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, MemberService memberService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.memberService = memberService;
    }

    public Answer findAnswer(long answerId){
        return findVerifiedAnswer(answerId);
//        return answerRepository.findById(answerId).orElse(null);
    }

    public List<Answer> findAllAnswers(long questionId){
        return answerRepository.findAllByQuestion(questionService.findVerifiedQuestion(questionId), Sort.by("createdAt").descending());
    }


    public Answer createAnswer(Answer answer){
        Answer createdAnswer = answerRepository.save(answer);
        Question question = createdAnswer.getQuestion();
        question.setQuestionAnswerStatus(QUESTION_ANSWERED);
        questionService.updateQuestion(question);
        return createdAnswer;
    }

    public Answer updateAnswer(Answer answer){
        Answer foundAnswer = findVerifiedAnswer(answer.getAnswerId());
        Optional.ofNullable(answer.getContent()).ifPresent(content -> foundAnswer.setContent(content));
        foundAnswer.setModifiedAt(LocalDateTime.now());
        return answerRepository.save(foundAnswer);
    }

    public void deleteAnswer(long answerId){
        Question foundQuestion = answerRepository.findById(answerId).orElse(null).getQuestion();
        if(foundQuestion.getAnswers().size() <= 1) {
            foundQuestion.setQuestionAnswerStatus(QUESTION_NOT_ANSWERED);
            questionService.updateQuestion(foundQuestion);
        }
        answerRepository.deleteById(answerId);
    }

    //Todo : findVerified로 존재하는 questionId인지 확인

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElse(null);
                        /*orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));*/
        return findAnswer;
    }
}
