package user.api.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import user.api.Entities.User;
import user.api.Repository.UserRepository;
import user.api.JwtUtil;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil; 

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        // Rechercher l'utilisateur par nom
        User foundUser = userRepository.findByName(user.getName());

        // Vérifier si l'utilisateur existe et si le mot de passe est correct
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            // Générer les tokens
            String accessToken = jwtUtil.generateAccessToken(foundUser);
            String refreshToken = jwtUtil.generateRefreshToken(foundUser);

            // Retourner les tokens (et éventuellement les informations de l'utilisateur) dans la réponse
            return ResponseEntity.ok().body(new AuthResponse(foundUser.getName(), accessToken, refreshToken));
        } else {
            // Retourner une réponse non autorisée ou personnalisée
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@RequestBody TokenRefreshRequest request) {
        String refreshToken = request.getRefreshToken();
        String username = jwtUtil.extractUsername(refreshToken);

        // Rechercher l'utilisateur par nom
        User foundUser = userRepository.findByName(username);

        // Vérifier si l'utilisateur existe et si le refresh token est valide
        if (foundUser != null && jwtUtil.validateToken(refreshToken, foundUser)) {
            // Générer un nouvel access token
            String newAccessToken = jwtUtil.generateAccessToken(foundUser);

            // Retourner le nouveau access token dans la réponse
            return ResponseEntity.ok().body(new AuthResponse(foundUser.getName(), newAccessToken, refreshToken));
        } else {
            // Retourner une réponse non autorisée ou personnalisée
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    // Classe statique pour la réponse d'authentification contenant les tokens
    static class AuthResponse {
        private String username;
        private String accessToken;
        private String refreshToken;

        public AuthResponse(String username, String accessToken, String refreshToken) {
            this.username = username;
            this.accessToken = accessToken;
            this.refreshToken = refreshToken;
        }

        // Getters et setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getAccessToken() {
            return accessToken;
        }

        public void setAccessToken(String accessToken) {
            this.accessToken = accessToken;
        }

        public String getRefreshToken() {
            return refreshToken;
        }

        public void setRefreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
        }
    }

    // Classe statique pour la demande de régénération de token
    static class TokenRefreshRequest {
        private String refreshToken;

        public String getRefreshToken() {
            return refreshToken;
        }

        public void setRefreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
        }
    }
}
