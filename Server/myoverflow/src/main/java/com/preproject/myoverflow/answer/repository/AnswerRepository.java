package com.preproject.myoverflow.answer.repository;

import com.preproject.myoverflow.answer.entity.Answer;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AnswerRepository extends CrudRepository<Answer, Long> {
}
