import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class represents the session operations for users.
 */
@RestController
@RequestMapping("/api")
public class SessionController {

    /**
     * Starts a new session for the authenticated user.
     *
     * @param user     An user object containing the username and password.
     * @param session  The current HTTP session.
     * @return A ResponseEntity indicating the status of session start.
     */
    @PostMapping("/start-session")
    public ResponseEntity<String> startSession(@RequestBody User user, HttpSession session);

    /**
     * Ends the current session.
     *
     * @param session The current HTTP session.
     * @return A ResponseEntity indicating the status of session termination.
     */
    @PostMapping("/end-session")
    public ResponseEntity<String> endSession(HttpSession session);
}





