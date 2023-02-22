package com.preproject.myoverflow.answer.service;

import com.preproject.myoverflow.answer.entity.Answer;
import com.preproject.myoverflow.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }


    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public void deleteAnswer(long answerId){
    }

}
