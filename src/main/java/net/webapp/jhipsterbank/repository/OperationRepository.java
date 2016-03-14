package net.webapp.jhipsterbank.repository;

import java.util.List;

import net.webapp.jhipsterbank.domain.Operation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Spring Data JPA repository for the Operation entity.
 */
public interface OperationRepository extends JpaRepository<Operation,Long> {

    @Query("select distinct operation from Operation operation left join fetch operation.labels")
    List<Operation> findAllWithEagerRelationships();

    @Query("select operation from Operation operation left join fetch operation.labels where operation.id =:id")
    Operation findOneWithEagerRelationships(@Param("id") Long id);

	Page<Operation> findByBankAccountUserLoginOrderByDateAsc(String currentUserLogin, Pageable pageable);

}
