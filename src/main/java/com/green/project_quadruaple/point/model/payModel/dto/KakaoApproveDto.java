package com.green.project_quadruaple.point.model.payModel.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.green.project_quadruaple.booking.model.dto.Amount;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class KakaoApproveDto {

    private String aid;

    @JsonProperty("payment_method_type")
    private String paymentMethodType;

    private Amount amount;

    @JsonProperty("card_info")
    private String cardInfo;
}
