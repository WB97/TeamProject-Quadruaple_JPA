package com.green.project_quadruaple.chat.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class JoinRes {
    private String userName;
    private String error;
}
