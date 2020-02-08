package pl.robertburek.repository;

import pl.robertburek.domain.Bike;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Bike entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BikeRepository extends JpaRepository<Bike, Long> {

}
