import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * This class represents connecting to the MySQL database.
 */
public class DatabaseConnection {

    private static final String DB_URL = "jdbc:mysql://localhost:3000/database";
    private static final String DB_USER = "your_username";
    private static final String DB_PASSWORD = "your_password";

    /**
     * Establishes a connection to the MySQL database.
     *
     * @return A Connection object representing the database connection.
     * @throws SQLException If there is an error connecting to the database.
     */
    public Connection getConnection() throws SQLException {
        Connection connection = null;
        try {
            // Load the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish the database connection
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return connection;
    }

    /**
     * Closes the database connection.
     *
     * @param connection The Connection object to be closed.
     * @throws SQLException If there is an error while closing the connection.
     */
    public void closeConnection(Connection connection) throws SQLException {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
