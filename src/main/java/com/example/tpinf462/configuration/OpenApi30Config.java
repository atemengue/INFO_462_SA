package com.example.tpinf462.configuration;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@OpenAPIDefinition(info = @Info(title = "  Vehicule API",version = "v1"))
@SecurityScheme(
        name = OpenApi30Config.SECURITY_CONFIG_NAME,
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer",
        in = SecuritySchemeIn.HEADER
)

public class OpenApi30Config implements WebMvcConfigurer {
    public static final String SECURITY_CONFIG_NAME = "JWT Token";

}
