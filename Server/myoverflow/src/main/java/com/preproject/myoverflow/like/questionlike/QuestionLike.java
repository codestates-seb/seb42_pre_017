package com.preproject.myoverflow.like.questionlike;

import com.preproject.myoverflow.audit.Auditable;
import com.preproject.myoverflow.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionLikeId;

//있는게 나은지 없는게 나은지 모르겠음
//1. 있을 때
//  status로 활성화, 비활성화로 클릭시마다 수정
//2. 없을 때[현재]
//  해당 레코드(튜플) 삭제
//    @Column
//    private String likeStatus = null;

//    @ManyToOne
//    @JoinColumn(name = "Member_ID")
//    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;


//    likeid  likeStatus  memberid  questionid

}
