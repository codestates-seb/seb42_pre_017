package com.preproject.myoverflow.auth.config;

import com.preproject.myoverflow.auth.filter.JwtAuthenticationFilter;
import com.preproject.myoverflow.auth.filter.JwtVerificationFilter;
import com.preproject.myoverflow.auth.handler.MemberAccessDeniedHandler;
import com.preproject.myoverflow.auth.handler.MemberAuthenticationEntryPoint;
import com.preproject.myoverflow.auth.handler.MemberAuthenticationFailureHandler;
import com.preproject.myoverflow.auth.handler.MemberAuthenticationSuccessHandler;
import com.preproject.myoverflow.auth.jwt.JwtTokenizer;
import com.preproject.myoverflow.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .headers().frameOptions().sameOrigin()
            .and()
            .csrf().disable()
            .cors(withDefaults())
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .formLogin().disable()
            .httpBasic().disable()
            .exceptionHandling()
            .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
            .accessDeniedHandler(new MemberAccessDeniedHandler())
            .and()
            .apply(new CustomFilterConfigurer())
            .and()
            .authorizeHttpRequests(authorize -> authorize
                            .antMatchers(HttpMethod.POST, "/*/members").permitAll()
                            .antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
                            .antMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")
//                          .mvcMatchers(HttpMethod.GET, "/*/members").hasRole("ADMIN")
                            .antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
                            .antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")

                            .antMatchers(HttpMethod.POST, "/*/questions/**").hasRole("USER")
                            .antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER")
                            .antMatchers(HttpMethod.DELETE, "/*/questions/**").hasAnyRole("USER", "ADMIN")

                            .antMatchers(HttpMethod.POST, "/*/answers/**").hasRole("USER")
                            .antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
                            .antMatchers(HttpMethod.DELETE, "/*/answers/**").hasAnyRole("USER", "ADMIN")

                            .anyRequest().permitAll()
            );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/myoverflow/login");
//            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
//            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                .addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
