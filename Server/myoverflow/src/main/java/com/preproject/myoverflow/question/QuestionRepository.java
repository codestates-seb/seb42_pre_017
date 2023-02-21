package com.preproject.myoverflow.question;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
//    @Query("select * from Question q where q.category = ?1")
    Page<Question> findAllByQuestion(String category, Pageable pageRequest);
}
