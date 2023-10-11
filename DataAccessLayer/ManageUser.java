/**
 * This class represents a Data Access Object for managing users in the database.
 */
public class ManageUser{

     /**
     * Retrieves a user from the database by their unique identifier.
     *
     * @param userId The unique identifier of the user.
     * @return A User object representing the retrieved user, or null if not found.
     * @throws SQLException If there is an error executing the database query.
     */
    public User getUserById(int userId) {
        // Implementation details for retrieving a user by ID
    }

    /**
     * Inserts a new user into the database.
     *
     * @param user The User object representing the user to be inserted.
     * @return True if the user was successfully inserted, false otherwise.
     * @throws SQLException If there is an error executing the database query.
     */
    public boolean addUser(User user) {
        // Implementation details for inserting a new user
    }

    /**
     * Updates an existing user in the database.
     *
     * @param user The User object representing the updated user.
     * @return True if the user was successfully updated, false otherwise.
     * @throws SQLException If there is an error executing the database query.
     */
    public boolean updateUser(User user) {
        // Implementation details for updating an existing user
    }

    /**
     * Deletes a user from the database by their unique identifier.
     *
     * @param userId The unique identifier of the user to be deleted.
     * @return True if the user was successfully deleted, false otherwise.
     * @throws SQLException If there is an error executing the database query.
     */
    public boolean deleteUser(int userId) {
        // Implementation details for deleting a user by ID
    }
}
