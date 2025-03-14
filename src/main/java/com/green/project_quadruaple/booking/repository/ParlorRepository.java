package com.green.project_quadruaple.booking.repository;

import com.green.project_quadruaple.entity.model.Menu;
import com.green.project_quadruaple.entity.model.Parlor;
import com.green.project_quadruaple.entity.model.StayTourRestaurFest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ParlorRepository extends JpaRepository<Parlor, Long> {
    void deleteAllByMenuIn(List<Menu> menus);
    void deleteAllByMenuStayTourRestaurFest(StayTourRestaurFest strf);

    @Query("""
        select p from Parlor p
        join fetch p.menu
        """)
    List<Parlor> findAllWithFetchJoin();
}

