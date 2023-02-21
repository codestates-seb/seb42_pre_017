package com.preproject.myoverflow.question;

import org.springframework.stereotype.Service;

@Service
//Todo : @Transational 적용
public class QuestionService {
    private final QuestionRepository repository;

    public QuestionService(QuestionRepository repository){
        this.repository = repository;
    }


    public Question createQuestion(Question question){
        Question createdQuestion = repository.save(question);
        return createdQuestion;
    }
}
