package com.preproject.myoverflow.answer.service;

import com.preproject.myoverflow.answer.entity.Answer;
import com.preproject.myoverflow.answer.repository.AnswerRepository;
import com.preproject.myoverflow.question.QuestionService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;
    private QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }


    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        Answer foundAnswer = answerRepository.findById(answer.getAnswerId()).orElse(null);
        Optional.ofNullable(answer.getContent()).ifPresent(content -> foundAnswer.setContent(content));
        foundAnswer.setModifiedAt(LocalDateTime.now());// 수정시간을 붙여줌

        return answerRepository.save(foundAnswer);
    }

    public Answer findAnswer(long answerId){
        return answerRepository.findById(answerId).orElse(null);
    }

    public List<Answer> findAllAnswers(long questionId){
        return answerRepository.findAllByQuestion(questionService.findVerifiedQuestion(questionId), Sort.by("createdAt").descending());
    }


    public void deleteAnswer(long answerId){
    }

}
