package com.green.project_quadruaple.booking.repository;

import com.green.project_quadruaple.booking.model.*;
import com.green.project_quadruaple.booking.model.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface BookingMapper {
    List<BookingListGetRes> getBooking(Long signedUserId);

    BookingPostRes postBooking(BookingPostReq req);

    CouponDto selExistUserCoupon(Long userId, Long couponId);
    stayOpenAndCloseAt selStrfOpenAndClose(Long strfId);
    List<MenuDto> selMenu(List<MenuIdAndQuantityDto> menuIdList);

    void insBooking(BookingPostReq dto);
    void insUsedCoupon(Long receiveId, Long bookingId);

    BookingApproveInfoDto selApproveBookingInfo(Long bookingId);

    void updateAllStateAfterCheckOut(LocalDateTime now);
}
