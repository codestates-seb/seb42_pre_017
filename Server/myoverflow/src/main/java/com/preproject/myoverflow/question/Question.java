package com.preproject.myoverflow.question;


import com.preproject.myoverflow.audit.Auditable;
import com.preproject.myoverflow.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    @ElementCollection(targetClass=String.class)
    private List<String> category;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 21, nullable = false)
    private QuestionAnswerStatus questionAnswerStatus = QuestionAnswerStatus.QUESTION_NOT_ANSWERED;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionOpenStatus questionOpenStatus= QuestionOpenStatus.QUESTION_PUBLIC;


    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }

//    @ManyToOne
//    private List<Answer> answers;

    public enum QuestionAnswerStatus {
        QUESTION_ANSWERED("답변완료"),
        QUESTION_NOT_ANSWERED("답변없음");
        @Getter
        private String status;

        QuestionAnswerStatus(String status) {
            this.status = status;
        }

    }

    public enum QuestionOpenStatus {
        QUESTION_PUBLIC("공개"),
        QUESTION_PRIVATE("비공개");

        @Getter
        private String status;

        QuestionOpenStatus(String status) {
            this.status = status;
        }
    }
}
