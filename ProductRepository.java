package com.ecommerce.repository;

import com.ecommerce.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.active = true " +
           "AND (:search IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%')) " +
           "     OR LOWER(p.description) LIKE LOWER(CONCAT('%', :search, '%'))) " +
           "AND (:categoryId IS NULL OR p.category.id = :categoryId)")
    Page<Product> findBySearchAndCategory(
            @Param("search") String search,
            @Param("categoryId") Long categoryId,
            Pageable pageable);
}
