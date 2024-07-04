package user.api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import user.api.Entities.User;

@Repository

public interface UserRepository extends JpaRepository<User, Integer> {
	User findByName(String name);

}
