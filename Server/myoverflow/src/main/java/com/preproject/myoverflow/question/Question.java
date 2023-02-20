package com.preproject.myoverflow.question;


import com.preproject.myoverflow.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
    private List<String> stack;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_NOT_ANSWERD;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private QuestionOpenStatus questionOpenStatus = QuestionOpenStatus.QUESTION_PUBLIC;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;

    public enum QuestionStatus {
        QUESTION_ANSWERD("답변완료"),
        QUESTION_NOT_ANSWERD("답변없음");
        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }

    }

    public enum QuestionOpenStatus {
        QUESTION_PUBLIC("공개"),
        QUESTION_PRIVATE("휴면 상태");

        @Getter
        private String status;

        QuestionOpenStatus(String status) {
            this.status = status;
        }
    }
}
