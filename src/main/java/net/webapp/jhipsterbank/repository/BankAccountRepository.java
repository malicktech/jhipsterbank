package net.webapp.jhipsterbank.repository;

import java.util.List;

import net.webapp.jhipsterbank.domain.BankAccount;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Spring Data JPA repository for the BankAccount entity.
 */
public interface BankAccountRepository extends JpaRepository<BankAccount,Long> {

    @Query("select bankAccount from BankAccount bankAccount where bankAccount.user.login = ?#{principal.username}")
    List<BankAccount> findByUserIsCurrentUser();

	Page<BankAccount> findByUserLogin(String currentUserLogin, Pageable pageable);

}
