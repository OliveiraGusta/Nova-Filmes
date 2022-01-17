package com.OliveiraGusta.NovaFilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.OliveiraGusta.NovaFilmes.entities.User;

public interface UserRepository extends JpaRepository <User, Long> {
	
	User findByEmail(String email);

}
