package com.preproject.myoverflow.question;

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

    public QuestionService(QuestionRepository repository){
        this.repository = repository;
    }


    public Question createQuestion(Question question){
        Question createdQuestion = repository.save(question);
        return createdQuestion;
    }

    public Question updateQuestion(Question question){
//        Question foundQuestion = findVerifiedQuestion(question.getQuestionId(), question.getMemberId());
        //Todo : 아래 추후 위의 메소드로 교체
        Question foundQuestion = repository.findById(question.getQuestionId()).orElse(null);
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
        System.out.println("no cate");
        return repository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public Page<Question> getQuestions(List<String> category, int page, int size){
        System.out.println("*".repeat(70));
        System.out.println("cate");
        System.out.println(category.get(0));
        return repository.findAllByQuestion(category.get(0), PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

//    private Question findVerifiedQuestion(long questionId, long memberId){
//        Todo : questionId로 DB의 레코드 들고와서 update하려는 question의 memberId가 같은지 판별
//         , 맞을 시 DB에서 가져온 Question return
//        Optional<Question> optionalQuestion = repository.findById(questionId);
//        Question q = new Question(1,"title","content", List.of("123","123"), Question.QuestionStatus.QUESTION_NOT_ANSWERD, Question.QuestionOpenStatus.QUESTION_PRIVATE);
//        Optional<String> oq = Optional.of(q.getTitle());
//        oq.or(oq.).
//        Question foundQuestion =
//                optionalQuestion.or()
//    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = repository.findById(questionId);
        Question foundQuestion =
                optionalQuestion
                        .orElse(null);
//                        .orElseThrow(() ->
//                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return foundQuestion;
    }

}
