package com.preproject.myoverflow.answer.entity;

import com.preproject.myoverflow.audit.Auditable;
import com.preproject.myoverflow.member.Member;
import com.preproject.myoverflow.question.Question;
import lombok.*;
import org.hibernate.validator.constraints.Currency;

import javax.persistence.*;
import java.time.LocalDateTime;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false)
    private String content;



    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public void addQuestion(Question question){
        this.question = question;
    }

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }



    @Enumerated(value = EnumType.STRING)
    @Column(length = 21, nullable = false)
    private AnswerOpenStatus answerOpenStatus = AnswerOpenStatus.ANSWER_PUBLIC;

    public enum AnswerOpenStatus{
        ANSWER_PUBLIC("공개"),
        ANSWER_PRIVATE("비공개");

        @Getter
        private String status;
        AnswerOpenStatus(String status){
            this.status= status;
        }
    }
}
