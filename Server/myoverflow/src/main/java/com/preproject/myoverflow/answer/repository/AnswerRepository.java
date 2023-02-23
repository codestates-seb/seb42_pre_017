package com.preproject.myoverflow.answer.repository;

import com.preproject.myoverflow.answer.entity.Answer;
import com.preproject.myoverflow.question.Question;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question, Sort sort);
}
