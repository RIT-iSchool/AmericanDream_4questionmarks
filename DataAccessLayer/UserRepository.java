import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This interface represents the repo for user entities.
 * Includes many pre-defined db operations that may or may not be used (save, delete, etc.)
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Finds a user by their username.
     *
     * @param username The username of the user.
     * @return The User object matching the given username or null if not found.
     */
    User findByUsername(String username);
}