package io.github.citizendiop.jhipsterbank.repository;

import io.github.citizendiop.jhipsterbank.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
